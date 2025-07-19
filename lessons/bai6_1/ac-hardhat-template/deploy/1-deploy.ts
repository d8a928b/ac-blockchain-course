import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

// Viết script deploy:
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("====================");
  console.log(hre.network.name);
  console.log("====================");

  console.log("====================");
  console.log("Deploy MyToken Contract");
  console.log("====================");

  // Deploy contract
  const deploymentResult = await deploy("MyToken", {
    contract: "MyToken",
    args: [],
    from: deployer,
    log: true,
    autoMine: true,
    skipIfAlreadyDeployed: false,
  });

  // In địa chỉ contract
  console.log("====================");
  console.log(`MyToken deployed at: ${deploymentResult.address}`);
  console.log("====================");
};

func.tags = ["deploy"];
export default func;
