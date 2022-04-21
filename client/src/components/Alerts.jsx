import React, {useState, useEffect} from "react";
import Popover from 'react-bootstrap/Popover';
import styles from "../assets/alerts.module.css"
import { axiosBackend  } from "../utils/axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation} from '@fortawesome/free-solid-svg-icons';


function Alerts() {

    const [contracts, setContracts] = useState([])


    const alert = (
        <div className={styles.alert}>
            <FontAwesomeIcon icon={faExclamation}/>
            <p>New Contract...</p>
            <a href="/contracts">View now </a>
        </div>
    )

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
            {alert}
            {/* {alert} */}

        </div>
    )
}

export default Alerts;