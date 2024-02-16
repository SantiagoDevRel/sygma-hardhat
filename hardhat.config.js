const { Environment } = require("@buildwithsygma/sygma-sdk-core");
require("@nomicfoundation/hardhat-toolbox");
require("@chainsafe/hardhat-plugin-multichain-deploy");

module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "goerli",
  networks: {
    sepolia: {
      chainId: 11155111,
      url: "https://gateway.tenderly.co/public/sepolia",
      accounts: ["0xca0f203073b871007e1b050d2d318e073816078d7c1a04d73baee3cad3127cdf"],
    },
    mumbai: {
      chainId: 80001,
      url: "https://polygon-testnet.public.blastapi.io",
      accounts: ["0xca0f203073b871007e1b050d2d318e073816078d7c1a04d73baee3cad3127cdf"],
    },
  },
  multichain: {
    environment: Environment.TESTNET,
  },
};
