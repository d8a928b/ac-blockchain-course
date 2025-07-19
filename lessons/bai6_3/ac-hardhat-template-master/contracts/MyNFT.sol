// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Viết contract MyNFT
// Kế thừa từ ERC721
contract MyNFT is ERC721, Ownable {
    // Biến nextTokenId
    uint256 public nextTokenId;

    // Hàm mint(address to) chỉ owner gọi được
    constructor(address initialOwner)
        ERC721("MyNFT", "MNFT")
        Ownable(initialOwner)
    {}

    function mint(address to) external onlyOwner {
        // Mỗi lần mint tăng nextTokenId
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }
}
