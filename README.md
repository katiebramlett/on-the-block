# On The Block

## GWU CS Senior Capstone Project

This is our Senior Capstone Project repository for **On The Block**, an Ethereum-based decentralized application and smart contract.<br>

Our Team: Katie Bramlett, Claire Furtick, Genevieve Flynn, & Ada Kilic<br>

View our webpage for **On The Block** [here](https://katiebramlett.github.io/on-the-block/).<br>

### Install How-To

1. Download the On The Block repository
2. Install node.js<br>
(Node.js download found here: [https://nodejs.org/en/](https://nodejs.org/en/))
3. Install Truffle<br>
Truffle is the development environment and testing framework we will use to deploy our smart contract.
```
npm install -g truffle
```
4. Install Ganache<br>
Ganache will be used as our personal Ethereum test blockchain.<br>
For the GUI, download [here](https://trufflesuite.com/ganache/) (preferred).<br>
To download the CLI:
```
npm install -g ganache-cli
```
5. Open Ganache and follow additional steps to set it up correctly<br>
  - Connect it to the On The Block repository by clicking New Workspace > naming your project > clicking Add Project > selecting the truffle-config file in the repostiory > clicking Save Workspace.
  - Furthermore, go to Settings and make sure your port is set to 8545 under the Server tab.<br>
7. Cd into the repository & deploy the contract<br>
```
cd on-the-block
```
To deploy the contract, in one terminal, open the Truffle console:
```
truffle develop
compile
migrate
```
8. Open two more terminals, one for client & one for server<br>
In one terminal, run the client. This should automatically open the web browser where it is being locally deployed (localhost:3000). If you have Metamask, open this in an incognitio browser so as not to confuse the networks.
```
cd client
npm run start
```
In the other terminal, run the server:
```
cd server
npm run start
```
9. Create an account to visit On The Block. Add a new wallet from Ganache to your Settings page, and get started with setting up your first rental contract.

### Credits
*The  multi-page navigation portion of the front-end JS/CSS of this project uses the below repository from Techomoro as a template.*<br>
[How to Create a Multi-Page Website with React](https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/)<br>
[React Multi-Page Website Source Code Repository from Techomoro](https://github.com/techomoro/ReactMultiPageWebsite)<br>
