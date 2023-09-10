
import { useState } from "react"
import { ethers } from "ethers";
import { address } from "../../hardhat/config"; // Update with your contract address
import Web3Modal from "web3modal";
import test from "../../hardhat/artifacts/contracts/main.sol/POTATToken.json"; // Update with your contract ABI

const ReferralPage = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit() {
    if (!email) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    
        try {
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();

            const tokenContract = new ethers.Contract(address, test.abi, signer);
            await tokenContract.automatedDistribution();

            console.log("Tokens distributed successfully!");
             setSuccessMessage("Successfully minted 1 POTAT tokens!");
             setErrorMessage(""); // Clear any previous error message
        } catch (error) {
              setErrorMessage("An error occurred. Please try again.");
              setSuccessMessage(""); // Clear any previous success message
        }

  }

  // Email validation function
  function isValidEmail(email) {
    // You can implement your email validation logic here
    // For example, using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-4xl font-bold mb-4 text-white">
        Join Our Referral Program
      </h1>
      <p className="text-lg text-white mb-8">
        Invite friends and earn POTAT tokens for each referral!
      </p>
      <input
        className="border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none"
        type="text"
        placeholder="Enter your friend's email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
        onClick={handleSubmit}
      >
        Get Started
      </button>
      {errorMessage && (
        <p className="text-red-600 mt-4">{errorMessage}</p>
      )}
      {successMessage && (
        <p className="text-green-600 mt-4">{successMessage}</p>
      )}
      <img
        className="mt-8 max-w-md"
        src="/referral-illustration.jpg"
        alt="Referral Illustration"
      />
    </div>
  );
};

export default ReferralPage;