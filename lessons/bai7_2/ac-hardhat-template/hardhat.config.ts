import { task } from "hardhat/config";
import "@openzeppelin/hardhat-upgrades";
import "@nomicfoundation/hardhat-verify";
import "hardhat-contract-sizer";
import "hardhat-abi-exporter";
import "hardhat-gas-reporter";
import * as dotenv from "dotenv";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "@nomicfoundation/hardhat-ethers";
import "@typechain/hardhat";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const {
  YOUR_PRIVATE_KEY: yourPrivateKey,
  YOUR_ETHERSCAN_API_KEY: yourEtherscanApiKey,
  INFURA_API_KEY: infuraApiKey,
} = process.env;
const reportGas = process.env.REPORT_GAS;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraApiKey}`,
      accounts: [yourPrivateKey]
    }
  },
  etherscan: {
    apiKey: yourEtherscanApiKey
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  solidity: "0.8.28",
};
