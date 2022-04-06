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

            <Card className="contract-cards" style={{ width: '65rem', height: '15' }}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <label for="contractid">Contract ID:</label> {contract.contractid}&nbsp;&nbsp;
                  <label for="landlordid">Landlord ID:</label> {contract.landlordid}&nbsp;&nbsp;
                  <label for="tenantid">Tenant ID:</label> {contract.tenantid}<br></br>
                  <label for="startdate">Start Date: </label> {contract.startdate}&nbsp;&nbsp;
                  <label for="enddate">End Date:</label> {contract.enddate}<br></br>
                  <label for="monthlyfee">Monthly Fee:</label> {contract.monthlyfee} ETH&nbsp;&nbsp;
                  <label for="status"><span style={{color: 'var(--alert)', fontWeight: 'bold'}}>Status:</span></label> {contract.isActive}&nbsp;&nbsp;
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
