const HDWalletProvider = require('@truffle/hdwallet-provider');
const infurakey = "ea02b4f4754b4a6c9257fb43aeef51e1" ;
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!

  compilers:{
    solc:{
      version: "^0.8.0"
    }
  },
  
  networks: {
      sepolia:{
        provider: () => new HDWalletProvider(mnemonic, 'https://sepolia.infura.io/v3/ea02b4f4754b4a6c9257fb43aeef51e1'),
        network_id: 11155111,
        chain_id: 5,
        gas: 8500000,
        confirmation: 2,
        timeoutBlock: 200,
        skipDryRun: true
      },
    develop: {
      port: 8545
    }
  }
};