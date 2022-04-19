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
  const [confirmPword, setconfirmPword] = useState();
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

      setWallets(response)
      setWalletAddr(response.wallets[0].walletaddr)
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

      setEdit(false)
  }

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
                    <label for="fname"><b>First Name: </b></label> {fname}&nbsp;&nbsp;
                    <label for="lname"><b>Last Name: </b></label> {lname}
                  </Card.Text>
                </Card.Body>
              </Card>
              <br></br>
              <Card className="settings-cards" style={{ width: '50rem', height: '10' }}>
                <Card.Body>
                  <Card.Title>Account Settings</Card.Title>
                  <Card.Text>
                    <label for="uname"><b>Username: </b></label> {uname}&nbsp;&nbsp;
                    {/* <label for="pword"><b>Password: </b></label><br></br> */}
                  </Card.Text>
                </Card.Body>
              </Card>
              <br></br>
              <Card className="settings-cards" style={{ width: '50rem', height: '10' }}>
                <Card.Body>
                  <Card.Title>Web3 Wallet</Card.Title>
                  <Card.Text>
                  <label for="walletID"><b>Wallet ID: </b></label> {walletAddr}<br></br>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br></br>
              <button onClick={editSettings} className="settings-button1">Edit Settings</button>
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
                  <h1>Edit Profile Settings</h1>
                  <label>
                      {/* <p>firstname</p> */}
                      <input 
                          type="text" 
                          onChange={e => setFname(e.target.value)} 
                          placeholder="first name">    
                          {/* value={fname}> */}
                      </input>
                  </label>
                  <br></br>
                  <label>
                      {/* <p>lastname</p> */}
                      <input 
                          type="text" 
                          onChange={e => setLname(e.target.value)} 
                          placeholder="last name">    
                          {/* value={lname}> */}
                      </input>
                  </label>
                  <br></br>
                  <label>
                      {/* <p>username</p> */}
                      <input 
                          type="text" 
                          onChange={e => setUname(e.target.value)} 
                          placeholder="username">    
                          {/* value={uname}> */}
                      </input>
                  </label>
                  <br></br>
                  <label>
                      {/* <p>password</p> */}
                      <input 
                          type="text" 
                          onChange={e => setPword(e.target.value)} 
                          placeholder="password">
                      </input>
                  </label>
                  <br></br>
                  <label>
                      {/* <p>confirm password</p> */}
                      <input 
                          type="text" 
                          onChange={e => setconfirmPword(e.target.value)} 
                          placeholder="confirm password">    
                      </input>
                  </label>
                  <br></br>
                  <label>
                      {/* <p>walletID</p> */}
                      <input 
                          type="text" 
                          onChange={e => setWalletID(e.target.value)} 
                          placeholder="wallet address">    
                          {/* value={walletAddr}> */}
                      </input>
                  </label>
                  <div>
                      <button 
                        className="settings-button2"
                        type="submit">Save Changes
                      </button>
                  </div>
                  <div>
                      <button 
                        className="settings-button2"
                        onClick={cancelButton}>Cancel
                      </button>
                  </div>
              </form>
          </div>
          </div>
    </div>
)


}

export default Settings;