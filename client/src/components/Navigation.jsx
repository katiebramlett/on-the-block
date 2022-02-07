import React from "react";
import { NavLink } from "react-router-dom";

import PropTypes from 'prop-types';

import img from '../assets/logo.png';

function Navigation({ setToken }) {

  /* Remove session token of a logged in user */

  const removeToken = async e => {
    e.preventDefault();
    setToken('');
    sessionStorage.clear();
    window.location.href = '/'
  }

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            On The Block
          </NavLink>
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
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" onClick={removeToken}>
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}


/* Proptypes check for if the system data matched expected types during runtime */
Navigation.propTypes = {
  setToken: PropTypes.func.isRequired
}


export default Navigation;
