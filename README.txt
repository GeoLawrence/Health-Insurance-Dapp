MEDRISC

The prototype is built using truffle suite.

Install Git and NodeJS

To compile the smart contract:

turffle compile

To run the smart contract on Ganache:

truffle migrate

Testing and Debgging can be done using Remix 

To deploy the smart contract to rinkeby, go to truffle-config file and 
provide the mnemonic and run the command:

truffle migrate --network rinkeby

(To see the transactions in the already deployed contract:
https://rinkeby.etherscan.io/address/0x6CbD81FCf6A7D67a527aF0139107383607845081)

Change to app directory and run the following command to run the front end:

npm start