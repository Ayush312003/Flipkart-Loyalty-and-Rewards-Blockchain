import type { NextPage } from "next";
import Head from "next/head";

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { address } from "../../hardhat/config";

import test from "../../hardhat/artifacts/contracts/main.sol/POTATToken.json";


const Home: NextPage = () => {
  const [errorMessage, setErrorMessage] = useState(""); // Define setErrorMessage function
  const [successMessage, setSuccessMessage] = useState(""); //Defining success message
  useEffect(() => { }, []);
  async function buyItem(price1) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const price = ethers.utils.parseUnits(price1.toString(), "ether");
    const tokenContract = new ethers.Contract(address, test.abi, signer);
    
    // Check if the user's tokens are expired
  const userAddress = await signer.getAddress();
  const purchaseTimestamp = await tokenContract.purchaseTimestamps(userAddress);
  if (Date.now() - purchaseTimestamp * 1000 > 60000) {
    // Tokens are expired, show an error message
    setErrorMessage("Tokens are expired");
  }
  const transaction = await tokenContract.transfer(address, price);

    await transaction.wait();
    setSuccessMessage("Item redeemed successfully!");
    console.log(signer._address);
  }
  useEffect(() => {
    // Clear error message after 4 seconds
    if (errorMessage) {
      const timeoutId = setTimeout(() => {
        setErrorMessage("");
      }, 4000);

      return () => clearTimeout(timeoutId);
    }
  }, [errorMessage]);
  useEffect(() => {
    // Clear success message after 4 seconds
    if (successMessage) {
      const timeoutId = setTimeout(() => {
        setSuccessMessage("");
      }, 4000);

      return () => clearTimeout(timeoutId);
    }
  }, [successMessage]); // New useEffect block for success message
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="bg-gray-100">
      {errorMessage && (
                <p className="text-red-600">{errorMessage}</p>
            )}
            {successMessage && (
  <p className="text-green-600">{successMessage}</p>
)}
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div className="rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="sonyanimation.jpg"
              alt="animation event"
            />
            <div className="px-6 py-4">
              <div className="font-bold italic text-xl mb-2">
                Sony Animation Special Event 
              </div>
              <p className="text-gray-700 italic text-base text-xl">
                Get special entry for our event with Sony Animation.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2">
              <span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">
                ♠ 0.1
              </span>
              <button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl" onClick={() => buyItem(0.1)}>
                Buy
              </button>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="workshop.jpg"
              alt="workshop"
            />
            <div className="px-6 py-4">
              <div className="font-bold italic text-xl mb-2">
                Get entry for our cinematic workshop
              </div>
              <p className="text-gray-700 italic text-base text-xl">
                For all cinematic entusiasts out there, get entry for our cinematic workshop with our special guest.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2">
              <span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">
                ♠ 0.2
              </span>
              <button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl" onClick={() => buyItem(0.2)}>
                Buy
              </button>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/gamescom.jpg"
              alt="gamescom"
            />
            <div className="px-6 py-4 pt-12">
              <div className="font-bold italic text-xl mb-2">
                Special Ticket for Sony Event at Gamescom
              </div>
              <p className="text-gray-700 italic text-base text-xl">
                Get special entry for our event at Gamescom.
              </p>
            </div>
            <div className="px-6 pt-2.5 pb-2">
              <span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">
                ♠ 0.3
              </span>
              <button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl" onClick={() => buyItem(0.3)}>
                Buy
              </button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Home;
