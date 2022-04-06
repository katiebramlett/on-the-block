import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from "../assets/nav.module.css"
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Alerts from "./Alerts";

import "../assets/navbar.css";
import img from '../assets/logo.png';

function Navigation({ setToken }) {

  /* Remove session token of a logged in user */

  const [notifClick, setnotifClick]  = useState(false)


  const removeToken = async e => {
    e.preventDefault();
    setToken('');
    sessionStorage.clear();
    window.location.href = '/'
  }

  const notifPopover = (

    // toggle visibility of notification window
    <Popover className="popover" id="popover-basic">
        <Popover.Body>
          <Alerts></Alerts>
        </Popover.Body>
      </Popover>

  )


  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/">
                  <li><img
                      src={img}
                      alt=""
                      width="60"
                      height="40"
                  /></li>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <li>About</li>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/newContract">
                  <li>New Contract</li>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contracts">
                  <li>My Contracts</li>
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <OverlayTrigger trigger="click" placement="bottom" overlay={notifPopover}>
                  <button className={styles.notifbutton}>
                    <FontAwesomeIcon icon={faBell}/>
                  </button>
                </OverlayTrigger>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/settings">
                  <li><FontAwesomeIcon icon={faUserCog}/></li>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" onClick={removeToken}>
                  <li><FontAwesomeIcon icon={faSignOutAlt}/></li>
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
