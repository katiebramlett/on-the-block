import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import RentalContract from "../contracts/RentalContract.json";
import getWeb3 from "../utils/getWeb3";
import "../assets/NewContract.css"
import { axiosBackend  } from "../utils/axios";
import useToken from "../utils/useToken";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

function NewContract() {

  const [landlord_addr, setLandlord_addr] = useState();
  const [tenant_addr, setTenant_addr] = useState();
  const [monthlyfee, setMonthlyfee] = useState();
  const [startdate, setStartDate] = useState();
  const [enddate, setEndDate] = useState();

  const [message, setMessage] = useState();
  const {token, setToken } = useToken();

  const [wallets, setWallets] = useState([])
  const [walletAddr, setWalletAddr] = useState();

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

        alert("Contract submitted successfully!")
        // response.data.contractid
      }).catch(e => {
        console.log(e)
        alert("Error submitting!")
      })
  }

  return (
    <div className="container">
      <div className="row align-items-top my-5">
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <h1><span style={{color: 'var(--main)'}}>Start New Contract</span></h1>
          <form onSubmit={createContract}>
            <input type="text" placeholder="Landlord Account Number" name="landlord_addr" onChange={e => setLandlord_addr(e.target.value)} ></input><br></br>
            <input type="text" placeholder="Tenant Account Number" name="tenant_addr" onChange={e => setTenant_addr(e.target.value)}></input><br></br>
            <input type="text" placeholder="Monthly Amount (in ETH)" name="monthlyfee" onChange={e => setMonthlyfee(e.target.value)} ></input><br></br>
            <input type="date" min={today} name="startdate" onChange={e => setStartDate(e.target.value)} ></input><br></br>
            <input type="date" name="enddate" min={today} onChange={e => setEndDate(e.target.value)} ></input><br></br>
            <input type="submit" value="Submit Contract"></input>
          </form>
        </div>
        <div className="col-lg-5">
          <h1> Your Rental Contract </h1>
            <div className="p">
              <ul class="icon">
                <li>
                  <FontAwesomeIcon icon={faHome}/> &nbsp;This contract enters you into a rental agreement between you and your tenant.<br></br>
                </li>
                <br></br>
                <li>
                  <FontAwesomeIcon icon={faDollarSign}/> &nbsp;&nbsp;&nbsp;Please specify the Ethereum wallet address for your tenant, the monthly amount (in ETH), and desired dates to set up this contract.<br></br>
                </li>
                <br></br>
                <li>
                  <FontAwesomeIcon icon={faBell}/> &nbsp;&nbsp;Upon submission, the tenant of your rental agreement will be notified of the contract and have the option to accept or deny.<br></br>
                </li>
                <br></br>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle}/> &nbsp;&nbsp;Subsequently, if accepted, the transaction will be sent and recorded.<br></br>
                </li>
              </ul>
            </div>
            {/* <div className="p">
              <FontAwesomeIcon icon={faHome}/> This contract enters you into a rental agreement between you and your tenant.<br></br>
              <br></br>
              <FontAwesomeIcon icon={faDollarSign}/> Please specify the Ethereum wallet address for your tenant, the monthly amount (in ETH), and desired dates to set up this contract.<br></br>
              <br></br>
              <FontAwesomeIcon icon={faBell}/> Upon submission, the tenant of your rental agreement will be notified of the contract and have the option to accept or deny.<br></br>
              <br></br>
              <FontAwesomeIcon icon={faCheckCircle}/> Subsequently, if accepted, the transaction will be sent and recorded.<br></br>
            </div> */}
          </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
}

/* Proptypes check for if the system data matched expected types during runtime */
/*NewContract.propTypes = {
  smartcontract: PropTypes.any.isRequired
}*/

export default NewContract;