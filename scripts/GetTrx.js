const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message); 

}

main();