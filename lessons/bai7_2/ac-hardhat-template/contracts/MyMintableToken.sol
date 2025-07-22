// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Viết contract MyMintableToken
// Kế thừa ERC20
contract MyMintableToken is ERC20, Ownable {
    constructor(address initialOwner)
        ERC20("My Mintable Token", "MMT")
        Ownable(initialOwner)
    {}

    // Hàm mint(address to, uint amount) chỉ owner gọi được
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
