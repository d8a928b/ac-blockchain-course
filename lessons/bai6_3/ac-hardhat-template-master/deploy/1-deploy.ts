import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

// Viết script deploy
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("Deploying MyNFT contract...");

  // Deploy contract
  const deployment = await deploy("MyNFT", {
    from: deployer,
    log: true,
    autoMine: true,
    args: [deployer],
  });

  console.log(`MyNFT deployed to: ${deployment.address}`);

  // Mint 1 NFT cho deployer
  const myNFT = await ethers.getContract("MyNFT", deployer);
  const tx = await myNFT.mint(deployer);
  await tx.wait();

  // In ownerOf(0)
  const owner = await myNFT.ownerOf(0);
  console.log(`Owner of token 0: ${owner}`);
};

func.tags = ["deploy"];
export default func;
