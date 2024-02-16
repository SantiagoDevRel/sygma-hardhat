//const hre = require("hardhat");
const { multichain } = require("hardhat");

async function main() {
  const networkArgs = {
    sepolia: {
      args: ["This is Sepolia"],
    },
    mumbai: {
      args: ["This is Mumbai"],
    },
  };

  const txObject = await multichain.deployMultichain("MyContract", networkArgs);

  console.log(`Receipt`, txObject);

  const getInfo = await multichain.getDeploymentInfo(transactionHash, domainIDs);

  console.log("Get info", getInfo);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
