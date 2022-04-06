import React, { useState, useEffect } from "react";
import "./App.css";
import useToken from "./utils/useToken";
import getWeb3 from "./utils/getWeb3";
import { library } from '@fortawesome/fontawesome-svg-core';
import RentalContract from "./contracts/RentalContract.json";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Login,
  Navigation,
  Footer,
  Home,
  About,
  NewContract,
  Contracts,
  Settings,
  CreateAccount,
  Notifications
} from "./components";

function App() {
  /* Check for logged in user */
  const { token, setToken } = useToken();

  /* variables I think are needed */ 

  // const [web3, setweb3] = useState()
  // const [accounts, setAccounts] = useState()
  // const [networkID, setNetworkID] = useState()
  // const [deployedNetwork, setDeployedNetwork] = useState()
  const [instance, setInstance] = useState()

  useEffect(() => {
    if (token) {
      // load web3 shit 

      const initWeb3Stuff  = async () => {

        //try {

          const web3 = await getWeb3();
          // Use web3 to get the user's accounts.
          const accounts = await web3.eth.getAccounts();
          // Get the contract instance.
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = RentalContract.networks[networkId];

          setInstance(new web3.eth.Contract(
            RentalContract.abi,
            deployedNetwork && deployedNetwork.address,
          ));

        // } catch (error) {

        //   alert(
        //     `Failed to load web3, accounts, or contract. Check console for details.`,
        //   );
        //   console.error(error)

        // }
      }

      initWeb3Stuff();

    }
  }, []);

  if (!token) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login setToken={setToken}/>} />
          <Route path="/login" element={<Login setToken={setToken}/>} />
          <Route path="/createAccount" element={<CreateAccount setToken={setToken}/>} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Navigation setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newContract" element={<NewContract smartcontract={ instance }/>} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
