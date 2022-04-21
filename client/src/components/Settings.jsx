import React, {useEffect, useState} from "react";
import "../assets/settings.css"

import { axiosBackend  } from "../utils/axios";
import useToken from "../utils/useToken";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Settings() {

  const {token, setToken} = useToken();

  const [settings, setSettings] = useState([])
  const [wallets, setWallets] = useState([])
  // define functions and state variables 
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [uname, setUname] = useState();
  const [pword, setPword] = useState();
  const [walletID, setWalletID] = useState();
  const [edit, setEdit] = useState(false);
  const [walletAddr, setWalletAddr] = useState();

  useEffect(() => {

    const getSettings = async e => {

      const response = await axiosBackend
        .get('/users/' + token, )
        .then(response => response.data)
            // alert("Settings loaded successfully")
            // response.data.contractid
            // setSettings(response)

        .catch(e => {
            console.log(e)
            // alert("Error loading!")
        });

      setSettings(response)
      setFname(response.settings[0].firstname)
      setLname(response.settings[0].lastname)
      setUname(response.settings[0].username)
      setPword(response.settings[0].password)
    }    

    getSettings()

    const getWallets = async e => {

      const response = await axiosBackend
        .get('/users/' + token + '/wallets/', )
        .then(response => response.data)
            // alert("Wallets loaded successfully")
            // response.data.contractid
            // setWallets(response)

        .catch(e => {
            console.log(e)
            // alert("Error loading!")
        });
      
      if (response.wallets[0] != null) {
        setWallets(response)
        setWalletAddr(response.wallets[0].walletaddr)
        setWalletID(response.wallets[0].walletaddr)
      }
    }    

    getWallets()
    
  }, [])

  const editSettings = async e => {
    
    // e.preventDefault() 

    setEdit(true)

  }
  const divStyle = {
    background: '#2f2f2f',
    color: '#fff',
  }

  const updateSettings = async e => {
    const settings = axiosBackend
      .post('/users/' + token, {
        fname,
        lname,
        uname,
        pword
      }).then(response => {
          alert("Settings updated successfully")
          // response.data.contractid
      }).catch(e => {
        console.log(e)
        alert("Error submitting!")
      })

    setWalletAddr(walletID)

    const walletaddr = walletID

    const updateWallet = axiosBackend
      .post('/users/' + token + '/updateWallet', {
        walletaddr
      }).then(response => {
          alert("Wallet updated successfully")
          // response.data.contractid
      }).catch(e => {
        console.log(e)
        alert("Error submitting!")
      })

      setEdit(false)
  }

  /*const updateWallet = async e => {
    const wallet = axiosBackend
    .post('/users/' + token + '/wallets', {
      walletID
    }).then(response => {
        // alert("Wallet updated successfully")
        // response.data.contractid
    }).catch(e => {
      console.log(e)
      alert("Error submitting!")
    })

    setEdit(false)
  }*/

  const cancelButton = () => {
    setEdit(false)
  }

  // If not in edit mode
  if (!edit) {
    return (
      <div className="settings">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-8">
              <h1><b>Profile & Settings</b></h1>
              <br></br>
              <Card className="settings-cards" style={{ width: '50rem', height: '10' }}>
                <Card.Body>
                  <Card.Title>User Settings</Card.Title>
                  <Card.Text>
                    <label for="fname"><span style={{color: 'var(--main)'}}>First Name: </span></label> {fname}&nbsp;&nbsp;
                    <label for="lname"><span style={{color: 'var(--main)'}}>Last Name: </span></label> {lname}
                  </Card.Text>
                </Card.Body>
              </Card>
              <br></br>
              <Card className="settings-cards" style={{ width: '50rem', height: '10' }}>
                <Card.Body>
                  <Card.Title>Account Settings</Card.Title>
                  <Card.Text>
                    <label for="uname"><span style={{color: 'var(--main)'}}>Username: </span></label> {uname}&nbsp;&nbsp;
                  </Card.Text>
                </Card.Body>
              </Card>
              <br></br>
              <Card className="settings-cards" style={{ width: '50rem', height: '10' }}>
                <Card.Body>
                  <Card.Title>Web3 Wallet</Card.Title>
                  <Card.Text>
                  <label for="walletID"><span style={{color: 'var(--main)'}}>Wallet ID: </span></label> {walletAddr}<br></br>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br></br>
              <button onClick={editSettings} className="settings-button">Edit Settings</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // In edit mode
  return (
    <div className="settings">
        <div className="container">
          <div className="row align-items-center my-5">
              <form onSubmit={updateSettings}>
                  <h1><b>Edit Profile Settings</b></h1>
                  <br></br>
                  <Card className="settings-cards" style={{ width: '55rem', height: '10' }}>
                  <Card.Body>
                    <Card.Title>User Settings</Card.Title>
                    <Card.Text>
                      <label for="fname"><span style={{color: 'var(--main)'}}>First Name: </span></label>
                        <input 
                            type="text" 
                            onChange={e => setFname(e.target.value)} 
                            placeholder="first name">    
                            {/* value={fname}> */}
                        </input>&nbsp;&nbsp;
                      <label for="lname"><span style={{color: 'var(--main)'}}>Last Name: </span></label>
                        <input 
                          type="text" 
                          onChange={e => setLname(e.target.value)} 
                          placeholder="last name">    
                          {/* value={lname}> */}
                        </input>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br></br>
                <Card className="settings-cards" style={{ width: '55rem', height: '10' }}>
                  <Card.Body>
                    <Card.Title>Account Settings</Card.Title>
                    <Card.Text>
                      <label for="uname"><span style={{color: 'var(--main)'}}>Username: </span></label>
                        <input 
                          type="text" 
                          onChange={e => setUname(e.target.value)} 
                          placeholder="username">    
                          {/* value={uname}> */}
                        </input>&nbsp;&nbsp;
                        <label for="pword"><span style={{color: 'var(--main)'}}>Password: </span></label>
                        <input 
                          type="text" 
                          onChange={e => setPword(e.target.value)} 
                          placeholder="password">
                      </input>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br></br>
                <Card className="settings-cards" style={{ width: '55rem', height: '10' }}>
                  <Card.Body>
                    <Card.Title>Web3 Wallet</Card.Title>
                    <Card.Text>
                    <label for="walletID"><span style={{color: 'var(--main)'}}>Wallet ID: </span></label>
                      <input 
                        type="text" 
                        onChange={e => setWalletID(e.target.value)} 
                        placeholder="wallet address">    
                        {/* value={walletAddr}> */}
                      </input><br></br>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br></br>
                <div>
                    <button className="settings-button" type="submit">Save Changes </button>
                    &nbsp;&nbsp;&nbsp;
                    <button className="settings-button" onClick={cancelButton}>Cancel </button>
                </div>
              </form>
          </div>
          </div>
    </div>
)


}

export default Settings;