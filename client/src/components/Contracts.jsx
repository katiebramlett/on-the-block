import React, { useEffect, useState } from "react";
import { axiosBackend  } from "../utils/axios";
import useToken from "../utils/useToken";

import "../assets/contracts.css"

import Card from 'react-bootstrap/Card';

function Contracts() {

  const {token, setToken } = useToken();

  const [contracts, setContracts] = useState([])

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

  return (
    <div className="settings">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-8">
            <h1><b>My Contracts</b></h1>
            <br></br>
            
            {
              contracts.map(contract =>  (

            <Card className="contract-cards" style={{ width: '50rem', height: '80' }}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <label for="landlordwallet"><b>Landlord Wallet:</b></label> {contract.landlordwallet}<br></br>
                  <label for="tenantwallet"><b>Tenant Wallet:</b></label> {contract.tenantwallet}<br></br>
                  <label for="startdate"><b>Start Date:</b></label> {contract.startdate}<br></br>
                  <label for="enddate"><b>End Date:</b></label> {contract.enddate}<br></br>
                  <label for="monthlyfee"><b>Monthly Fee:</b></label> {contract.monthlyfee} ETH<br></br>
                  <label for="status"><span style={{color: 'var(--alert)', fontWeight: 'bold'}}>Status:</span></label> {contract.status}<br></br>
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
