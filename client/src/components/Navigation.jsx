import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import img from '../assets/logo.png';

import "../assets/navbar.css"

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
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/">
                  <li><FontAwesomeIcon icon={faHome}/> ON THE BLOCK</li>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <FontAwesomeIcon icon={faInfoCircle}/>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/newContract">
                  New Contract
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contracts">
                  My Contracts
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/notifications">
                  <FontAwesomeIcon icon={faBell}/>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/settings">
                  <FontAwesomeIcon icon={faCog}/>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" onClick={removeToken}>
                  <FontAwesomeIcon icon={faSignOutAlt}/>
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
