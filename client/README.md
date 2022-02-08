## React Tutorials to Revisit 

- [App Login Tutorial](https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications#introduction)

- [Custom 404 Pages](https://naveenda.medium.com/creating-a-custom-404-notfound-page-with-react-routers-56af9ad67807)

- [React Routing](https://blog.logrocket.com/react-router-dom-tutorial-examples/)

- [React Redirecting](https://www.pluralsight.com/guides/how-to-set-react-router-default-route-redirect-to-home)

- [Private Page Rerouting](https://dev.to/nilanth/how-to-create-public-and-private-routes-using-react-router-72m#:~:text=The%20private%20route%20component%20is,is%20authenticated%20(Logged%20in).)

- [Use reducer for React](https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react)

## To Do:
- fix error handling around the create account page
- change authentication to use Metamask and the Blockchain instead of our API

## DAPP Notes
- window.ethereum is the global API to request Ethereum accounts and read data from blockcahins, suggests the user can sighn messages and transactions
- @metamask/detect-provider to detect the provider
    - prompt user to download Metamask in order to interact with our application
- window.ethereum gets the provider, detect the Ethereum network connected to, get the user's Ethereum accounts 
- there are other libraries like (ethers) which can be used
- chain IDs --> 0x1 for the mainnet, others for testnets
- how to change authentication to use Metamask instead of our database API??
- how to store state using Metamask and the blockchain?
    - something called a block explorer
    - currently a centralized database is the [best option](https://docs.alchemy.com/alchemy/tutorials/transfers-tutorial) for storing historical information
- need to keep connection persistant
