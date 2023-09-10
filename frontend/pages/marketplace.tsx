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
	const [cartItems, setCartItems] = useState([]);
	const [totalTokensRequired, setTotalTokensRequired] = useState(0);
	const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
	const [cartExpanded, setCartExpanded] = useState(false); // New state for cart expansion
  
	async function buyItem(price1) {
		try {
			const web3Modal = new Web3Modal();
			const connection = await web3Modal.connect();
			const provider = new ethers.providers.Web3Provider(connection);
			const signer = provider.getSigner();
		
			const price = ethers.utils.parseUnits(price1.toString(), "ether");
			const tokenContract = new ethers.Contract(address, test.abi, signer);
			const transaction = await tokenContract.buying({
			  value: price,
			});
		
			await transaction.wait();
			const userAddress = await signer.getAddress();
			setSuccessMessage(`Payment succeeded for ${price1} Ξ from ${userAddress}`);
			setErrorMessage(""); // Clear any previous error message

			// Clear messages after 3 seconds
			setTimeout(() => {
				setSuccessMessage("");
				setErrorMessage("");
			  }, 3000);
			  // Empty the cart and reset totalTokensRequired after successful payment
			  setCartItems([]);
			  setTotalTokensRequired(0);
		  } catch (error) {
			setErrorMessage("Payment failed. Please try again.");
			setSuccessMessage(""); // Clear any previous success message
			setTimeout(() => {
				setErrorMessage("");
			  }, 5000);
		  }
	}
  
	function addToCart(item) {
	  setCartItems([...cartItems, item]);
	  setTotalTokensRequired(totalTokensRequired + item.price);
	  setCartExpanded(true);
	}
	//remove items from cart
	function removeItemFromCart(item) {
		const updatedCart = cartItems.filter((cartItem) => cartItem !== item);
		setCartItems(updatedCart);
		setTotalTokensRequired(
		  totalTokensRequired - item.price
		);
	  }
  
	function buyItemsFromCart() {
		// Calculate the total price of items in the cart
		const totalPrice = cartItems.reduce(
		  (accumulator, item) => accumulator + item.price,
		  0
		);
	  
		// Call the buyItem function with the total price
		buyItem(totalPrice);
	  }
  
	const products = [
	  {
		imageUrl: "/headphones.jpg",
		name: "Sony Headphones MDR-XB450",
		description: "Extra Bass Technology.Tailor made for electronic dance music lovers. The enhanced Extra Bass technology enables you to enjoy the intensity of deep bass notes in a variety of locations and scenarios",
		price: 700,
	  },
	  {
		imageUrl: "/camera.jpg",
		name: "Sony FX3 cinema camera",
		description: "Optimized for cinematic expression.The FX3 features a 10.2MP* Full-frame Backside-illuminated (BSI) Exmor R CMOS sensor that delivers sensitivity, speed and superior movie quality.",
		price: 500,
	  },
	  {
		imageUrl: "/playstation.jpg",
		name: "Playstation 5",
		description: "The PlayStation 5 boasts impressive hardware, including a powerful custom AMD processor and a high-performance GPU, enabling stunning graphics and smooth gameplay.",
		price: 1400,
	  },
	  // Add more product objects here
	];
	
  
	return (
	  <>
			<div className="fixed top-10 left-0 right-0 p-4 z-50">
			{successMessage && (
			<p className="text-green-600">{successMessage}</p>
			)}
			{errorMessage && (
				<p className="text-red-600">{errorMessage}</p>
			)}
			</div>

			<div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div className="bg-white p-6 rounded-lg shadow-md" key={index}>
                <img className="w-full mb-4 rounded-lg" src={product.imageUrl} alt={product.name} />
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 text-base mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold">Ξ {product.price}</span>
                  <button
                    className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  
		<button
  className="fixed bottom-4 left-4 z-50 bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
  onClick={() => setCartExpanded(!cartExpanded)} // Toggle cartExpanded state
>
  {cartExpanded ? (
    <span className="text-gray-700 text-2xl">-</span>
  ) : (
    <span className="text-gray-700 text-2xl">+</span>
  )}
</button>

<div
  className={`fixed bottom-0 left-0 z-40 p-4 bg-white rounded-t-lg w-72 ${
    cartExpanded ? 'h-96' : 'h-12'
  } transition-all duration-300`}
>
  {cartExpanded && (
    <>
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-2">
                {item.name} - Ξ {item.price}
                <button
                  className="text-red-600 ml-2"
                  onClick={() => removeItemFromCart(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-full"
              onClick={() => buyItemsFromCart()}
            >
              Buy
            </button>
          </div>
        </>
      )}
    </>
  )}
</div>

<style jsx>
  {`
    .fixed {
      position: fixed;
    }
    .top-10 {
      top: 10;
    }
    .left-0 {
      left: 0;
    }
    .right-0 {
      right: 0;
    }
    
    .z-50 {
      z-index: 50;
    }
    .text-green-600 {
      color: #34D399; /* Green color */
    }
    .text-red-600 {
      color: #EF4444; /* Red color */
    }
  `}
</style>
	  </>
	);
  };
  
  export default Home;
