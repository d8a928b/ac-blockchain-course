import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { MyToken } from "../typechain";

describe("MyToken", function () {
  let deployer: SignerWithAddress,
    admin: SignerWithAddress,
    addr1: SignerWithAddress,
    addr2: SignerWithAddress;

  let myToken: MyToken;

  const deploy = async () => {
    [deployer, admin, addr1, addr2] = await ethers.getSigners();

    // Deploy MyToken contract
    const MyTokenFactory = await ethers.getContractFactory("MyToken");
    myToken = await MyTokenFactory.deploy();
  };

  before(async () => {
    console.log("Deploying MyToken contract...");
    await deploy();
  });

  describe("Deployment", function () {
    it("Should assign the total supply to the deployer", async function () {
      const totalSupply = await myToken.totalSupply();
      const deployerBalance = await myToken.balanceOf(deployer.address);

      expect(deployerBalance).to.equal(totalSupply);
    });

    it("Should have correct name and symbol", async function () {
      expect(await myToken.name()).to.equal("MyToken");
      expect(await myToken.symbol()).to.equal("MTK");
    });
  });

  describe("Transfers", function () {
    it("Should transfer tokens between accounts", async function () {
      const amount = ethers.parseUnits("100", 18);

      await myToken.transfer(addr1.address, amount);
      const addr1Balance = await myToken.balanceOf(addr1.address);

      expect(addr1Balance).to.equal(amount);
    });

    it("Should fail if sender doesn't have enough balance", async function () {
      const bigAmount = ethers.parseUnits("1000000000", 18);

      await expect(
        myToken.connect(addr2).transfer(deployer.address, bigAmount)
      ).to.be.reverted;
    });
  });
});
