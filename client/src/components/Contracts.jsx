import React, { useEffect, useState } from "react";
import { axiosBackend  } from "../utils/axios";
import useToken from "../utils/useToken";
import styles from '../assets/contract.module.css'

import "../assets/contracts.css"

import Card from 'react-bootstrap/Card';
import axios from "axios";

function Contracts() {

  const {token, setToken } = useToken();

  const [contracts, setContracts] = useState([])


  const message = "No contracts found."

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
  }

  /* only display buttons if the id of the user = tenant id and the contract is pending */
  const checkButtons = (id, status, contractid) => {

    if (id == token && status == 'pending') return <Buttons contractid={contractid}></Buttons>;

    else if (status == 'active') return (
      <div>
        <button className={styles.denyButton} onClick={e => updateStatus(e, "terminated", contractid)}>End Contract</button>
      </div>
    )

    return ;
  }

  /* update status of one contract */

  const updateStatus = async(e, status, contractid) => {
    console.log("calling backend with " + contractid + " and status " + status)
    
    axiosBackend
      .post('contracts/update', {contractid, status})
      .then(response => {})
      .catch(e => {
        console.log(e)
      })

    window.location.reload()
  }

  function Buttons( contractid ) {
    return ( 
      <div>
        <button className={styles.approvebutton} onClick={e => updateStatus(e, "active", contractid.contractid)}>Approve </button>
        <button className={styles.denyButton} onClick={e => updateStatus(e, "terminated", contractid.contractid)}>Deny</button>
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

            {
              contracts.map(contract =>  (

            <Card className="contract-cards" style={{ width: '65rem', height: '15', marginBottom: '15px'}}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <label for="landlordwallet">Landlord Wallet:</label> {contract.landlordwallet}&nbsp;&nbsp;
                  <label for="tenantwallet">Tenant Wallet:</label> {contract.tenantwallet}<br></br>
                  <label for="startdate">Start Date: </label> {contract.startdate.split('T')[0]}&nbsp;&nbsp;
                  <label for="enddate">End Date:</label> {contract.enddate.split('T')[0]}<br></br>
                  <label for="monthlyfee">Monthly Fee:</label> {contract.monthlyfee} ETH&nbsp;&nbsp;
                  <label for="status"><span style={{color: 'var(--alert)', fontWeight: 'bold'}}>Status:</span></label> {contract.status}&nbsp;&nbsp;
                  
                  {
                    checkButtons(contract.tenantid, contract.status, contract.contractid)
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

export default Contracts;
