import React, {useState} from "react";
import "../assets/settings.css"

// make this a form 

function Settings() {

  // define functions and state variables 
  const [firstname, setFirstname] = useState("Katie");
  const [lastname, setLastname] = useState("Bramlett");
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
              <h4>User Profile</h4>
              <label for="fname"><b>First Name: </b>{firstname}</label><br></br>
              <label for="lname"><b>Last Name: </b>{lastname}</label><br></br>
              <br></br>
              <h4>Account Settings</h4>
              <label for="uname"><b>Username: </b>katiebram</label><br></br>
              <label for="pword"><b>Password: </b>*********</label><br></br>
              <br></br>
              <h4>Connect Web3 Wallet</h4>
              <label for="wallet"><b>Wallet ID: </b>0xC83D74A1c0A28c49C231Fb02Dd5b0F99F3D80422</label><br></br>
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
            <div className="col-lg-8"></div>
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
            <label>
                {/* <p>lastname</p> */}
                <input 
                    type="text" 
                    onChange={e => setLastname(e.target.value)} 
                    placeholder="lastname">
                </input>
            </label>
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
            <label>
                {/* <p>confirm password</p> */}
                <input 
                    type="text" 
                    onChange={e => setconfirmPassword(e.target.value)} 
                    placeholder="confirm password">    
                </input>
            </label>
            <label>
                {/* <p>walletID</p> */}
                <input 
                    type="text" 
                    onChange={e => setWalletID(e.target.value)} 
                    placeholder="walletID">
                </input>
            </label>
            <br></br>
            <div>
                <button 
                  className="settings-button2"
                  type="submit">Save Changes
                </button>
            </div>
        </form>
    </div>
    </div>
    </div>
)


}

export default Settings;