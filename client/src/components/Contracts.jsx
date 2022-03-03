import React, { useEffect, useState } from "react";
import { axiosBackend  } from "../utils/axios";
import useToken from "../utils/useToken";


function Contracts() {

  const {token, setToken } = useToken();

  const [contracts, setContracts] = useState()

  useEffect(() => {

    const getContracts = async () => {

      const response = await axiosBackend
        .get('contracts/' + token, )
        .then(response => response.data)
        .catch(e => {
            console.log(e)
        });

      setContracts(response)
      console.log("CONTRACTS" + contracts)

    }    

    getContracts()
    
  }, []);


  return (
    <div className="contracts">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1><b>My Contracts</b></h1>
            <br></br>
            <h5>Current Contracts</h5>
            <p>Contracts:
              {JSON.stringify(contracts)}
            </p>
            <br></br>
            <h5>Previous Contracts</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contracts;
