var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "mnemonic goes here";

module.exports = {
    networks: {
      rinkeby: {
        provider: function() {
          return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/152c1713cc9b4dd79c6ce1eae3749a1b")
        },
        network_id: 4
      }
    }
  };
