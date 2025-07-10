import { ethers } from "hardhat";
import { MyToken } from "../typechain";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account: ", deployer.address);

  const myToken: MyToken = await ethers.getContract("MyToken");

  const balance = await myToken.balanceOf(deployer.address);
  const totalSupply = await myToken.totalSupply();

  if (balance === totalSupply) {
    console.log("✅ Deployer holds entire supply.");
  } else {
    console.error("❌ Balance mismatch!");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
