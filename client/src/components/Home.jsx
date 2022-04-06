import React from "react";
import "../assets/home.css";
import img from '../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <br></br>
        <div className="row align-items-center my-5">
          <div className="col-lg-1">
          </div>
          <div className="col-lg-5">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={img}
              alt=""
              width="525"
              height="225"
            />
          </div>
          <div className="col-lg-5">
            <h1><b>ON THE BLOCK</b></h1>
            <br></br>
            <h4>Get <b>SMART</b> with your rental contracts.</h4>
            <br></br>
            <h5>
              <b>ON THE BLOCK</b>, our Ethereum-based decentralized application, is a streamlined payment portal which can be used to set up timely, recurring rental payments.
            </h5>
            <br></br>
            <a className="infoLink" href="/about">Want more info? <FontAwesomeIcon icon={faArrowAltCircleRight}/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
