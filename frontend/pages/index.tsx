import type { NextPage } from "next";
import Head from "next/head";

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { address } from "../../hardhat/config";

import test from "../../hardhat/artifacts/contracts/main.sol/POTATToken.json";

let rpcEndpoint = null;
if (process.env.NEXT_PUBLIC_WORKSPACE_URL) {
  rpcEndpoint = process.env.NEXT_PUBLIC_WORKSPACE_URL;
}

const Home: NextPage = () => {
  useEffect(() => {}, []);

  async function addToken() {
    console.log("If testing in local environment, please make sure to have Metamask installed and connected to localhost:8545 , and set chainId to 31337.");
    console.log("Hey testers! I know you're reading this, have some water and take a break... you deserve it! - Love, the devs");
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
              address: address, // The address that the token is at.
              symbol: 'POTAT', // A ticker symbol or shorthand, up to 5 chars.
              decimals: 18, // The number of decimals in the token
            },
          },
        });

        if (wasAdded) {
          console.log('Thanks for your interest!');
        } else {
          console.log('Never mind, have a nice day!');
        }
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <>
      <Head>
        <link rel="icon" href="/cryptocurrency.png" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <body className="bg-gray-100 font-sans">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-purple-600 mb-4">
              🌟 Welcome to Our Ultimate Loyalty and Rewards Experience! 🌟
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Introducing the POTAT Tokens Loyalty and Rewards Program! Shop, earn rewards,
              and unlock exclusive items. Experience shopping like never before and spread the joy
              to your friends. Seamlessly integrated with Metamask for complete transparency.
              Excitement awaits!
            </p>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                💎 What Awaits You:
              </h2>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Shop and get rewarded with <strong>POTAT Tokens</strong>.</li>
                <li>Share the joy, earn more by <strong>referring friends</strong>.</li>
                <li>Seamless Metamask integration for tracking.</li>
                <li>Experience the thrill of <strong>token expiry!</strong></li>
              </ul>
            </div>
            <button
              className="w-full bg-pink-500 text-white text-xl font-semibold py-3 rounded-lg hover:bg-pink-600 transition duration-300"
              onClick={() => addToken()}
            >
              🚀 Add Token! 🚀
            </button>
          </div>
        </div>
      </body>
    </>
  );
};

export default Home;
