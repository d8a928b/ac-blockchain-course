import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("https://eth-sepolia.public.blastapi.io");

  const abi = [
    "function balanceOf(address) view returns (uint256)",
    "function decimals() view returns (uint8)"
  ];
  const contractAddress = "0xb5033DE59F64cB01ac38bbd45a08c638EcB7a8F5"; // Replace with your contract address
  const contract = new ethers.Contract(contractAddress, abi, provider);

  /**
   * Get the current balance of deployer
   */
  const deployerAddress = "0x9473Af68Eb7797a0D8Dad554A4D48B24d5EDE996";
  const rawBalance = await contract.balanceOf(deployerAddress);
  const decimals = await contract.decimals();
  const formatted = ethers.formatUnits(rawBalance, decimals);

  console.log(`💰 Balance of ${deployerAddress}: ${formatted} tokens`);
}

main().catch(console.error);
