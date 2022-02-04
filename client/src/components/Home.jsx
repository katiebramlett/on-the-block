import React from "react";
import "../assets/test.css"

import img from '../assets/logo.png';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <br></br><br></br>
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={img}
              alt=""
              width="350"
              height="210"
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">On The Block</h1>
            <br></br>
            <h4>Get <b>SMART</b> with your rental contracts.</h4>
            <br></br>
            <p>
              <b>On The Block</b>, our Ethereum-based decentralized application, is a streamlined payment portal which can be used to set up timely, recurring rental payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
