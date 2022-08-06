require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config(); 
//require("@nomiclabs/hardhat-etherscan");

/**
* @type import('hardhat/config').HardhatUserConfig
*/

const { API_URL, PRIVATE_KEY } = process.env; 

//const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "rinkeby",
   networks: {
      hardhat: {},
      rinkeby: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
  //  etherscan: {
  //   // Your API key for Etherscan
  //   // Obtain one at https://etherscan.io/
  //   apiKey: ETHERSCAN_API_KEY
  // }
};