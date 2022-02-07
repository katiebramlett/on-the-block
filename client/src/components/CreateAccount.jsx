import React, {useState} from "react";
import { axiosBackend  } from "../utils/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


import '../assets/createaccount.css'


function CreateAccount() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setconfirmPassword] = useState();
    const [error, setError] = useState();

    const createAccount = async e => {


    }

    return (
        <div className="create-account-wrapper">
            <form onSubmit={createAccount}>
                <h1>Create an Account</h1>
                <label><p>username </p><input type="text" onChange={e => setUsername(e.target.value)} placeholder="username"></input></label><br></br>
                <label><p>password </p><input type="password" onChange={e => setPassword(e.target.value)} placeholder="password"></input></label><br></br>
                <label><p>confirm password </p><input type="password" onChange={e => setPassword(e.target.value)} placeholder="confirm password"></input></label><br></br>
                <div>
                    <button type="submit">SIGN UP</button>
                </div>
                <div>
                    <p>Already a user? <br></br> <a href="/login"> Login <FontAwesomeIcon icon={faSignInAlt}/></a></p>
                </div>
            </form>
        </div>
    )

}

export default CreateAccount;