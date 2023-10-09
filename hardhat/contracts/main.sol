
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract POTATToken is ERC20 {
	address owner;
	mapping(address => uint256) public purchaseTimestamps; // Mapping to store purchase timestamps

	constructor() ERC20("potat", "POTAT") {
		owner = msg.sender;
	}

	function buying() public payable {
		require(msg.value != 0, "Must send some Ether");
		_mint(msg.sender, msg.value / 100);
		purchaseTimestamps[msg.sender] = block.timestamp; // Store purchase timestamp
	}

	modifier tokenNotExpired(address _user) {
		require(
			block.timestamp - purchaseTimestamps[_user] <= 1 minutes,
			"Tokens are expired"
		);
		_;
	}

	function automatedDistribution() public {
		// Implement your automated distribution logic here
		// For example, distribute tokens based on specific conditions
		// Mint tokens to the caller's address
		_mint(msg.sender, 1 ether);
		purchaseTimestamps[msg.sender] = block.timestamp;
	}

	function transfer(
		address recipient,
		uint256 amount
	) public override tokenNotExpired(msg.sender) returns (bool) {
		super.transfer(recipient, amount);
		return true;
	}

	function transferFrom(
		address sender,
		address recipient,
		uint256 amount
	) public override tokenNotExpired(sender) returns (bool) {
		super.transferFrom(sender, recipient, amount);
		return true;
	}

	// Burn expired tokens after expiration
	function redeemExpiredTokens() public {
		require(
			block.timestamp - purchaseTimestamps[msg.sender] > 1 minutes,
			"Tokens are not expired yet"
		);
		_burn(msg.sender, balanceOf(msg.sender));
	}

	fallback() external payable {}

	receive() external payable {}
}
