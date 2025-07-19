// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Viết contract tên `MyToken`
contract MyToken is ERC20 {
    // Tên token: MyToken Symbol: MTK
    constructor() ERC20("MyToken", "MTK") {
        // Tổng cung: 1,000,000 token
        // Mint toàn bộ cho deployer trong constructor
        _mint(msg.sender, 1_000_000 * 10**decimals());
    }
}
