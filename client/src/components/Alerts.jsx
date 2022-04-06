import React, {useState, useEffect} from "react";
import Popover from 'react-bootstrap/Popover';
import styles from "../assets/alerts.module.css"
import { axiosBackend  } from "../utils/axios";


function Alerts() {

    const [contracts, setContracts] = useState([])

    useEffect(() => {
  
      const getContracts = async () => {
  
        // const response = await axiosBackend
        //   .get('contracts/' + token, )
        //   .then(response => response.data)
        //   .catch(e => {
        //       console.log(e)
        //   });
  
        // setContracts(response)
  
      }    
  
    //   getContracts()
      
    }, []);
  

    return (
        <div className={styles.alertcontainer}>

            <div className={styles.alert}>

                <h4></h4>


            </div>

        </div>
    )
}

export default Alerts;