import React from "react";

function Settings() {
  return (
    <div className="settings">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-8">
            <h1><b>Profile & Settings</b></h1>
            <br></br>
            <h4>User Profile</h4>
            <label for="fname"><b>First Name: </b>Katie</label><br></br>
            <label for="lname"><b>Last Name: </b>Bramlett</label><br></br>
            <br></br>
            <h4>Account Settings</h4>
            <label for="uname"><b>Username: </b>katiebramlett</label><br></br>
            <label for="pword"><b>Password: </b>*********</label><br></br>
            <br></br>
            <h4>Connect Web3 Wallet</h4>
            <label for="wallet"><b>Wallet ID: </b>0xC83D74A1c0A28c49C231Fb02Dd5b0F99F3D80422</label><br></br>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
