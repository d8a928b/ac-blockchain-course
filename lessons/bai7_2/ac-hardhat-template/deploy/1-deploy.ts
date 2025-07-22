import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

// Viết script deploy
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, ethers } = hre;
  const { deploy } = deployments;
  const [deployerSigner] = await ethers.getSigners();
  const deployer = await deployerSigner.getAddress();

  console.log("====================");
  console.log(hre.network.name);
  console.log("====================");

  console.log("====================");
  console.log("Deploy MyMintableToken Contract");
  console.log("====================");

  // Deploy contract
  const deployment = await deploy("MyMintableToken", {
    from: deployer,
    args: [deployer],
    log: true,
    skipIfAlreadyDeployed: false,
  });

  // Mint 1000 token cho deployer
  const token = await ethers.getContractAt("MyMintableToken", deployment.address, deployerSigner);
  const mintAmount = ethers.parseUnits("1000", 18);
  await token.mint(deployer, mintAmount);
  console.log(`✅ Minted 1000 MMT to ${deployer}`);

  // In balance của deployer
  const balance = await token.balanceOf(deployer);
  console.log(`💰 Deployer balance: ${ethers.formatUnits(balance, 18)} MMT`);
};

func.tags = ["deploy"];
export default func;
