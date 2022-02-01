import React, { useState } from "react";
import "./App.css";

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
} from "./components";


import "./App.css";

function App() {
  /* Check for logged in user */
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken}></Login>

  }

  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newContract" element={<NewContract />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </Router>
  );

}

export default App;
