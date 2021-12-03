const HDWalletProvider = require('truffle-hdwallet-provider');
const KEY = "";

module.exports = {
  contracts_directory: "./contracts/solidity",
  compilers: { 
    solc: { 
      version: "^0.6.0"
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    test: { //Rinkeby TEST
      provider: () =>
        new HDWalletProvider([KEY], 'rinkeby'),
        network_id: "*",
        gas: 45000000,
        gasPrice: 0,
    }
  }
};
