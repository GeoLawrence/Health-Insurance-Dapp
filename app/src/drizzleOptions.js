import Insurance from './contracts/Insurance.json';

const options = {
    web3: {
      block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545",
    },
  },

  contracts: [Insurance],
  events: {
    underwrite: ["underwrite"],
    claim:["claim"],
    reimburse:["reimburse"]
  },
  polls: {
    accounts: 1500,
  },

};

export default options;
