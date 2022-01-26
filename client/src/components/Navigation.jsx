import React from "react";
import { NavLink } from "react-router-dom";
import img from '../assets/logo.png';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            On The Block
          </NavLink>
          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={img}
              alt=""
              width="70"
              height="42"
            />
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/newContract">
                  Start New Contract
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contracts">
                  My Contracts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/settings">
                  Settings
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
