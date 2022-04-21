# Solidity Dev Setup 

## Prerequisites 

Make sure you have node.js installed and react.<br>
(Node.js download found here: [https://nodejs.org/en/](https://nodejs.org/en/))

```
    node -v 
    npm install create-react-app
```

## Truffle 

Truffle is the framework we will be using to structure our smart contract.

```
npm install -g truffle
```

## Ganache 

This will be used as our local test blockchain.

```
npm install -g ganache-cli
```

## Code repository setup 

The app structure was created by using truffle and react. 

Note: do not run these! They have already been run this is just explaining how the structure was created. 

```
truffle unbox react 
```

Before deploying the contract you need to have ganache-cli running in the background to act as the network, it will be listening on 127.0.0.1:8585 

```
ganache-cli
```

Running these commands created the following directory structure: 

## Contract deployment 

To deploy the contracts, in one terminal:

```
truffle develop
compile
migrate
```

Open another terminal and do not close the first. 

```
cd client 
npm run start
```

This should automatically open the web browser where it is being locally deployed. If you have metamask, open localhost in incognitio so as not to confuse the networks. 

If you want to run with Metamask you need to import the wallets ([tutorial here](https://www.youtube.com/watch?v=jaTnIeWjAg0))
