import React from "react";
import "./App.css";
import useToken from './useToken';


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


function App() {
  /* Check for logged in user */
  const { token, setToken } = useToken();

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
