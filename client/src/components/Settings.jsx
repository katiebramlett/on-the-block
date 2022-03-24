import React, {useState} from "react";
import "../assets/settings.css"

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// make this a form 

function Settings() {

  // define functions and state variables 
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [walletID, setWalletID] = useState();
  const [edit, setEdit] = useState(false);


  const editSettings = async e => {
    //e.preventDefault() 

    setEdit(true)

  }
  const divStyle = {
    background: '#2f2f2f',
    color: '#fff',
  }
  if (!edit) {
    return (
      <div className="settings">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-8">
              <h1><b>Profile & Settings</b></h1>
              <br></br>
              <Card className="settings-cards" style={{ width: '65rem', height: '10' }}>
                <Card.Body>
                  <Card.Title>User Settings</Card.Title>
                  <Card.Text>
                    <label for="fname"><b>First Name: </b>Katie</label>&nbsp;&nbsp;
                    <label for="lname"><b>Last Name: </b>Bramlett</label>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br></br>
              <Card className="settings-cards" style={{ width: '65rem', height: '10' }}>
                <Card.Body>
                  <Card.Title>Account Settings</Card.Title>
                  <Card.Text>
                    <label for="uname"><b>Username: </b>katiebram</label>&nbsp;&nbsp;
                    <label for="pword"><b>Password: </b>*********</label><br></br>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br></br>
              <Card className="settings-cards" style={{ width: '65rem', height: '10' }}>
                <Card.Body>
                  <Card.Title>Connect Web3 Wallet</Card.Title>
                  <Card.Text>
                  <label for="walletID"><b>Wallet ID: </b>0xC83D74A1c0A28c49C231Fb02Dd5b0F99F3D80422</label><br></br>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br></br>
              <button onClick={editSettings} className="settings-button1">Edit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
//adding new return 
  return (
    <div className="settings">
        <div className="container">
          <div className="row align-items-center my-5">
              <form onSubmit={editSettings}>
                  <h1>Edit Profile Settings</h1>
                  <label>
                      {/* <p>firstname</p> */}
                      <input 
                          type="text" 
                          onChange={e => setFirstname(e.target.value)} 
                          placeholder="firstname">
                      </input>
                  </label>
                  <br></br>
                  <label>
                      {/* <p>lastname</p> */}
                      <input 
                          type="text" 
                          onChange={e => setLastname(e.target.value)} 
                          placeholder="lastname">
                      </input>
                  </label>
                  <br></br>
                  <label>
                      {/* <p>username</p> */}
                      <input 
                          type="text" 
                          onChange={e => setUsername(e.target.value)} 
                          placeholder="username">
                      </input>
                  </label>
                  <br></br>
                  <label>
                      {/* <p>password</p> */}
                      <input 
                          type="text" 
                          onChange={e => setPassword(e.target.value)} 
                          placeholder="password">
                      </input>
                  </label>
                  <br></br>
                  <label>
                      {/* <p>confirm password</p> */}
                      <input 
                          type="text" 
                          onChange={e => setconfirmPassword(e.target.value)} 
                          placeholder="confirm password">    
                      </input>
                  </label>
                  <br></br>
                  <label>
                      {/* <p>walletID</p> */}
                      <input 
                          type="text" 
                          onChange={e => setWalletID(e.target.value)} 
                          placeholder="walletID">
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
                        type="submit">Cancel
                      </button>
                  </div>
              </form>
          </div>
          </div>
    </div>
)


}

export default Settings;