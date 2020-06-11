require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7546,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: '/home/fkb/blockchain/blockChain/insurance/src/contracts/',
  contracts_build_directory: '/home/fkb/blockchain/blockChain/insurance/src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
