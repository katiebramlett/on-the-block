import React, { useState } from "react";
import PropTypes from 'prop-types';
import RentalContract from "../contracts/RentalContract.json";
import getWeb3 from "../utils/getWeb3";
import "../assets/NewContract.css"
import { axiosBackend  } from "../utils/axios";
import useToken from "../utils/useToken";


function NewContract({ smartcontract }) {

  const [landlord_addr, setLandlord_addr] = useState();
  const [tenant_addr, setTenant_addr] = useState();
  const [monthlyfee, setMonthlyfee] = useState();
  const [startdate, setStartDate] = useState();
  const [enddate, setEndDate] = useState();

  const [message, setMessage] = useState();
  const {token, setToken } = useToken();

  const today = new Date().toISOString().split("T")[0]

  const createContract = async e => {

    e.preventDefault()

    const contractId = axiosBackend
      .post('/contracts', {
        token, 
        landlord_addr, 
        tenant_addr,
        monthlyfee,
        startdate,
        enddate
      }).then(response => {

        smartcontract.methods.payRent(landlord_addr).send({from: tenant_addr, value: 1000000000000000000 * monthlyfee}).then((error, tranasctionHash)=>{alert(tranasctionHash);});

        alert("Contract submitted successfully with id" + response.data.contractid)
        // response.data.contractid
      }).catch(e => {
        console.log(e)
        alert("Error submitting!")
      })
    
  }

  return (
      <div className="newcontract_container">
        <div className="row">
          <div className="col" id="col1">
            <h1>Start New Contract</h1>
            <form onSubmit={createContract}>
              <input type="text" placeholder="Landlord Account Number" name="landlord_addr" onChange={e => setLandlord_addr(e.target.value)} ></input><br></br>
              <input type="text" placeholder="Tenant Account Number" name="tenant_addr" onChange={e => setTenant_addr(e.target.value)}></input><br></br>
              <input type="text" placeholder="Monthly Amount" name="monthlyfee" onChange={e => setMonthlyfee(e.target.value)} ></input><br></br>
              <input type="date" min={today} name="startdate" onChange={e => setStartDate(e.target.value)} ></input><br></br>
              <input type="date" name="enddate" min={today} onChange={e => setEndDate(e.target.value)} ></input><br></br>
              <input type="submit" value="Submit Contract"></input>
            </form>
          </div>
          <div className="col" id="col2">
            <h1> Your rental contract </h1>
            <div className="p">
              This contract enters you into a rental agreement with your tenant. Please specify the Ethereum account address to collect this payment. 
              Upon submission, your tenant will be notified of the contract. Please specific the amount in Ether per month. 
            </div>
          </div>
        </div>
      </div>
  );
}

/* Proptypes check for if the system data matched expected types during runtime */
NewContract.propTypes = {
  smartcontract: PropTypes.any.isRequired
}

export default NewContract;