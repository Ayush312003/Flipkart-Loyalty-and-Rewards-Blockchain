// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import hre from "hardhat";
const fs = require('fs');

async function main() {
	// We get the contract to deploy
	const POTATToken = await hre.ethers.getContractFactory("POTATToken");
	const potatToken = await POTATToken.deploy();

	await potatToken.deployed();

	console.log("POTATToken deployed to:", potatToken.address);

	  let config = `
  export const address = "${potatToken.address}"
  `
    let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error);
		process.exit(1);
	});
