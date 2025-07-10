import { ethers } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();


async function main() {
  const provider = new ethers.JsonRpcProvider("https://eth-sepolia.public.blastapi.io");

  const abi = [
    "function mint(address to) external",
    "function ownerOf(uint256 tokenId) external view returns (address)"
  ];
  const contractAddress = "0x7d6921b85f51426834eCdA029842498AAD830Ba9"; // Replace with your contract address
  const privateKey = process.env.PRIVATE_KEY!;
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  /**
   * Mint a NFT to deployer
   */
  
  
  console.log("Minting NFT to:", wallet.address);
  const tx = await contract.mint(wallet.address);
  await tx.wait();

  const owner = await contract.ownerOf(0);
  console.log("Owner of tokenId 0:", owner);
}

main().catch(console.error);
