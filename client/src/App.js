import React from "react";
import "./App.css";
import useToken from "./utils/useToken";
import { library } from '@fortawesome/fontawesome-svg-core';

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
        <Route path="/newContract" element={<NewContract />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
