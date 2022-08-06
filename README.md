# Smart-Contract-Deployment-and-Send-Transaction-Using-Hardhat-Ether.js-Node.js

This repo is about the deployment of solidity smart contract on ethereum blockchain on rinkeby testnet using hardhat and interacting with contract using node.js script for node.js. 
The purpose is to 

```
1- Build and deploy your contract using Hardhat.
2- Writing a node-js script to send the transaction using Ether.js.
3- Writing a node-js script to get the transaction using Ether.js.

```
### Setting Up the Environment

```
1- VSCode
2- Javascript
3- MetaMask
4- Solidity
5- Hardhat
6- Ether.js
7- Node.js
8- Json
9- Ethereum Blockchain

```

Most Ethereum libraries and tools are written in JavaScript, and so is Ether.js. If you're not familiar with Node.js, it's a JavaScript runtime built on Chrome's V8 JavaScript engine. It's the most popular solution to run JavaScript outside of a web browser and hardhat is built on top of it.

# Getting Started

## Connect to the Ethereum network
There are many ways to make requests to the Ethereum chain. For simplicity, we’ll use a free account on #Infura, a blockchain developer platform, and API that allows us to communicate with the Ethereum chain without having to run our own nodes. The platform also has developer tools for monitoring and analytics that we’ll take advantage of in this tutorial to understand what’s going on under the hood in our smart contract deployment.


### Initializing NPM

```
npm install -y
```
### Installing Hardhat

```
npm install --save-dev hardhat

```
### Initializing Hardhat

```
npx hardhat

```
#### Note: You can use your own contract or use default demo contract using npx hardhat command in terminal 

### Installing Dependencies 
```
npm install --save-dev @nomicfoundation/hardhat-toolbox@^1.0.1
npm install --save-dev @nomiclabs/hardhat-ethers ethers

```

### Compiling Smart Contract Using hardhat
To compile the contract run npx hardhat compile in your terminal. The compile task is one of the built-in tasks.
```
npx hardhat compile

Compiling 1 file....
Compilation finished successfully

```

### Deploying Smart contract on Rinkeby Testnet
The contract has been successfully compiled and is ready to be used.
Now, deploy this contract to rinkeby testnet. Run the deployment script present in the scripts folder, using following command:
```
npx hardhat run scripts/deploy.js --network rinkeby
Contract deployed successfully

```

#  Interact with your Smart Contract using ether.js and node.js script

### Installing Dotenv file to keep private key and sensitive data secured

```
npm install dotenv --save

```

#### Your .env should look like this:

```
API_URL = "https://eth-rinkeby.alchemyapi.io/v2/<your-api-key>"
API_KEY = "<your-api-key>"
PRIVATE_KEY = "<your-metamask-private-key>"
CONTRACT_ADDRESS = "0x<your contract address>"

```
### Grab your contract ABI

```
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

```
If you want to see the ABI you can print it to your console:

```

console.log(JSON.stringify(contract.abi)); 

and run npx hardhat run scripts/interact.js

```

### Create an instance of your contract

```
// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_KEY);

```
```
// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

```
```
// Contract
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

```

### Read the init message
...

async function main() {
  const message = await helloWorldContract.message();
  console.log("The message is: " + message);
}
main();

...

Run the script using: npx hardhat run scripts/GetTrx.js

...

### Update the message

...

async function main() {
  const message = await helloWorldContract.message();
  console.log("The message is: " + message);
  
  console.log("Updating the message...");
  const tx = await helloWorldContract.update("This is the new message.");
  await tx.wait();
}
main();

...

Run:

...

npx hardhat run scripts/SendTrx.js --network rinkeby

Tx is Successfull

```
### Check the transaction of deployed contract on Etherscan

```
0xc483157d284C0df5AaDc38801a15aC535A18fc29

```

## Versioning

```
pragma solidity ^0.8.15;

```

## License

```

//SPDX-License-Identifier: UNLICENSED

```
