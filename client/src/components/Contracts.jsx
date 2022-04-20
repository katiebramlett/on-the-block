import React, { useEffect, useState } from "react";
import { axiosBackend  } from "../utils/axios";
import useToken from "../utils/useToken";
import styles from '../assets/contract.module.css'

import PropTypes from 'prop-types';
import RentalContract from "../contracts/RentalContract.json";
import getWeb3 from "../utils/getWeb3";

import "../assets/contracts.css"

import Card from 'react-bootstrap/Card';
import axios from "axios";

function Contracts({ smartcontract }) {

  const {token, setToken } = useToken();

  const [contracts, setContracts] = useState([])

  const [noContracts, setNoContracts] = useState(false);

  const message = "You do not have any contracts. You can create a contract on the New Contract page."

  useEffect(() => {    

    getContracts()
    
  }, []);

  const getContracts = async () => {

    const response = await axiosBackend
      .get('contracts/' + token, )
      .then(response => response.data)
      .catch(e => {
          console.log(e)
      });

    setContracts(response)

    if (contracts == null) {
      setNoContracts(true)
    }
  }

  /* only display buttons if the id of the user = tenant id and the contract is pending */
  const checkButtons = (contract) => {

    const id = contract.tenantid
    const status = contract.status
    const contractid = contract.contractid

    if (id == token && status == 'pending') return <Buttons contract={contract}></Buttons>;

    else if (status == 'active') return (
      <div>
        <button className={styles.denyButton} onClick={e => updateStatus(e, "terminated", contract)}>End Contract</button>
      </div>
    )

    return ;
  }

  /* update status of one contract */
  const updateStatus = async(e, status, contract) => {

    const contractid = contract.contractid
    const landlordwallet = contract.landlordwallet
    const tenantwallet = contract.tenantwallet
    const monthlyfee = contract.monthlyfee

    axiosBackend
      .post('contracts/update', {contractid, status})
      .then(response => {
        alert("Contract updated successfully!")
        // response.data.contractid
      })
      .catch(e => {
        console.log(e)
        alert("Error updating!")
      })

    if (status == 'active') {
      Transaction(contractid, landlordwallet, tenantwallet, monthlyfee)
    }

    window.location.reload()
  }

  // Send money in transaction upon contract being set as active
  function Transaction (contractid, landlordwallet, tenantwallet, monthlyfee) {
  alert("ContractID: " + contractid + " Landlord Wallet: " + landlordwallet + " Tenant Wallet: " + tenantwallet + " fee: " + monthlyfee)
    // Call smart contract pay rent function to send money
    smartcontract.methods.payRent(landlordwallet).send({from: tenantwallet, value: 1000000000000000000 * monthlyfee}).then((error, tranasctionHash)=>{alert(tranasctionHash);});
  }

  function Buttons({contract}) {

    return ( 
      <div>
        <button className={styles.approvebutton} onClick={e => updateStatus(e, "active", contract)}>Approve </button>

        <button className={styles.denyButton} onClick={e => updateStatus(e, "denied", contract)}>Deny</button>
      </div>
    )
  }  
  return (
    <div className="settings">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-8">
            <h1><b>My Contracts</b></h1>
            <br></br>
            <p>
              {contracts.length < 1 ? message : '' }
            </p>
            {
              contracts.map(contract =>  (

            <Card className="contract-cards" style={{ width: '65rem', height: '15', marginBottom: '15px'}}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <label for="landlordwallet"><span style={{color: 'var(--main)'}}>Landlord Wallet:</span></label> <span style={{color: 'var(--lightgray)'}}>{contract.landlordwallet}</span><br></br>
                  <label for="tenantwallet"><span style={{color: 'var(--main)'}}>Tenant Wallet:</span></label> <span style={{color: 'var(--lightgray)'}}>{contract.tenantwallet}</span><br></br>
                  <label for="startdate"><span style={{color: 'var(--main)'}}>Start Date: </span></label> {contract.startdate.split('T')[0]}&nbsp;&nbsp;
                  <label for="enddate"><span style={{color: 'var(--main)'}}>End Date:</span></label> {contract.enddate.split('T')[0]}<br></br>
                  <label for="monthlyfee"><span style={{color: 'var(--main)'}}>Monthly Fee:</span></label> {contract.monthlyfee} ETH&nbsp;&nbsp;
                  <label for="status"><span style={{color: 'var(--alert)'}}>Status:</span></label> {contract.status}&nbsp;&nbsp;
                  
                  {
                    checkButtons(contract)
                  }

                </Card.Text>
              </Card.Body>
            </Card>
  
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Proptypes check for if the system data matched expected types during runtime */
Contracts.propTypes = {
  smartcontract: PropTypes.any.isRequired
}

export default Contracts;
