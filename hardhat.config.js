require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    mumbai:{
      url:process.env.POLYGON_MUMBAI,
      accounts:[process.env.WALLET_PRIVATE_KEY]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "KZ26SEQKZFSICIJ2S49SD9ZEKDWGEPPSRQ"
  }
};
