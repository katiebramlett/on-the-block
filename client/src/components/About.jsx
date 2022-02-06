import React from "react";
import "../assets/test.css"

import img from '../assets/logo.png';

function About() {
  return (
    <div className="home">
      <div className="container">
        <br></br><br></br>
        <h1 className="font-weight-light">About On The Block</h1>
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
          <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={img}
              alt=""
              width="200"
              height="130"
            />
            <br></br>
            <h3>How It Works</h3>
            <p>
              On the Block, our Ethereum decentralized application, allows users to easily interact with a smart contract to set up timely, recurring monthly payments. By utilizing blockchain technology, specifically an Ethereum-based application, we are alleviating the tedious and complicated process of paying rent to a landlord.
            </p>
          </div>
          <div className="col-lg-5">
            <br></br>
            <h3>Benefits & Features</h3>
            <p>
              Autonomy, Cost-Effectiveness, Transparency, Visibility, Efficiency and Performance, Accuracy, Time Savings, Security, Fairness.<br></br>
              <br></br>
              Start New Rental Contracts,<br></br>
              Check Existing Rental Contracts,<br></br>
              Get Easy Notifications and Alerts,<br></br>
              Set Up Timely Recurring Payments, &<br></br>
              Terminate Existing Contracts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
