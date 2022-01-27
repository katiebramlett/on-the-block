import React from "react";

function Settings() {
  return (
    <div className="settings">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Settings</h1>
            <br></br>
            <label for="fname"><b>First Name:</b><p>Katie</p></label><br></br>
            <label for="lname"><b>Last Name:</b><p>Bramlett</p></label><br></br>
            <label for="uname"><b>Username:</b><p>kbramlett</p></label><br></br>
            <label for="pword"><b>Password:</b><p>********</p></label><br></br>
            <label for="wallet"><b>Wallet ID:</b><p>0xC83D74A1c0A28c49C231Fb02Dd5b0F99F3D80422</p></label><br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
