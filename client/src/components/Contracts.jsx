import React from "react";

import {axiosBackend} from '../utils/axios'

function Contracts() {

  const getContracts = async e => {    
    const contracts = axiosBackend
      .get('contracts')
      .then(response => {
          // setToken(response.data.token)
          // window.location.href = '/' ???

          console.log(response.data)


      })
      .catch(e => {
          console.log(e)
      });
  }

  return (
    <div className="contracts">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1><b>My Contracts</b></h1>
            <br></br>
            <h5>Current Contracts</h5>
            <br></br><br></br>
            <h5>Previous Contracts</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contracts;
