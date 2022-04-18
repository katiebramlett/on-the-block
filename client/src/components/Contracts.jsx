import React, { useEffect, useState } from "react";
import { axiosBackend  } from "../utils/axios";
import useToken from "../utils/useToken";
import styles from '../assets/contract.module.css'

import "../assets/contracts.css"

import Card from 'react-bootstrap/Card';

function Contracts() {

  const {token, setToken } = useToken();

  const [contracts, setContracts] = useState([])


  const message = "No contracts found."

  useEffect(() => {

    const getContracts = async () => {

      const response = await axiosBackend
        .get('contracts/' + token, )
        .then(response => response.data)
        .catch(e => {
            console.log(e)
        });

      setContracts(response)

    }    

    getContracts()
    
  }, []);

  const checkRole = (id) => {

    if (id == token) return true;

    return false;

  }

  function Buttons( contractId ) {
    return ( 
      <div>
        <button className={styles.approvebutton} onclick={updateStatus('active', contractId)}>Approve</button>
        <button className={styles.denyButton} onclick={updateStatus('active', contractId)}>Deny</button>
      </div>
    )
  }  

  const updateStatus = () => {

    /* make backend call to update status */ 

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
                    checkRole(contract.tenantid) ? <Buttons contractId={contract.contractid}></Buttons> :  ''
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
