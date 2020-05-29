require('babel-register');
require('babel-polyfill');
const Web3 = require('web3');
const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require("fs");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    westlake: {
			// provider: new Web3.providers.HttpProvider("https://mymember2.blockchain.azure.com:3200/kz9_V3YJq14HosDuQiQBY6Qz"),
      // host: "https://mymember2.blockchain.azure.com",
      // port: 3200,
      provider: new HDWalletProvider(fs.readFileSync('/home/codersam/itsmine/nodejs_projects/Blockchain-for-Medical-Records/Blockchain/working_block/myblockchainmember.env', 'utf-8'), "https://mymember2.blockchain.azure.com:3200/kz9_V3YJq14HosDuQiQBY6Qz"),
      network_id: "*",
			gas: 0,
			gasPrice: 0
      // from: "mymember2"
      // networkCheckTimeout: 10000
		},
  },
  contracts_directory: '/home/codersam/itsmine/nodejs_projects/Blockchain-for-Medical-Records/Blockchain/working_block/src/contracts/',
  contracts_build_directory: '/home/codersam/itsmine/nodejs_projects/Blockchain-for-Medical-Records/Blockchain/working_block/src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
