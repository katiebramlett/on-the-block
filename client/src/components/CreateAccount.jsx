import React, {useState} from "react";
import { axiosBackend  } from "../utils/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import '../assets/createaccount.css'

function CreateAccount({ setToken }) {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setconfirmPassword] = useState();

    /* errors lol */
    const [errorFN, setErrorFN] = useState();
    const [errorLN, setErrorLN] = useState();
    const [errorUN, setErrorUN] = useState();
    const [errorPW, setErrorPW] = useState();
    const [errorCPW, setErrorCPW] = useState();

    const createAccount = async e => {

        e.preventDefault()

        if (!firstname) setErrorFN("First name is a required field."); 
        if (!lastname) setErrorLN("Last name is a required field."); 
        if (!username) setErrorUN("Username is a required field."); 
        if (!password) setErrorPW("Password is a required field.");
        if (!confirmPassword) setErrorCPW("Please confirm your password.")
        else if (password != confirmPassword) setErrorCPW("Passwords must match.") 

        // all input is correct, attempt to create a new user 
        else if (firstname && lastname && username && password && password === confirmPassword) { 
            const token =  await axiosBackend
                .post('users/create', {
                    firstname,
                    lastname,
                    username, 
                    password
                })
                .then(response => {
                    setToken(response.data.token)
                    window.location.href = '/'
                })
                .catch(e => {
                    console.log(e)
                    setErrorUN("Username is unavailable.")
                 });
        }
    }

    return (
        <div className="create-account-wrapper">
            <form onSubmit={createAccount}>
                <h1>Create Account</h1>
                <label>
                    {/* <p>firstname</p> */}
                    {errorFN && <div style={{color: 'white'}}>{errorFN}</div>}
                    <input 
                        type="text" 
                        onChange={e => setFirstname(e.target.value)} 
                        placeholder="firstname">
                    </input>
                </label>
                <br></br>
                <label>
                    {errorLN && <div style={{color: 'white'}}>{errorLN}</div>}
                    {/* <p>lastname</p> */}
                    <input 
                        type="text" 
                        onChange={e => setLastname(e.target.value)} 
                        placeholder="lastname">
                    </input>
                </label>
                <br></br>
                <label>
                    {errorUN && <div style={{color: 'white'}}>{errorUN}</div>}
                    {/* <p>username</p> */}
                    <input 
                        type="text" 
                        onChange={e => setUsername(e.target.value)} 
                        placeholder="username">
                    </input>
                </label>
                <br></br>
                <label>
                    {errorPW && <div style={{color: 'white'}}>{errorPW}</div>}
                    {/* <p>password</p> */}
                    <input 
                        type="password" 
                        onChange={e => setPassword(e.target.value)} 
                        placeholder="password">
                    </input>
                </label>
                <br></br>
                <label>
                    {errorCPW && <div style={{color: 'white'}}>{errorCPW}</div>}
                    {/* <p>confirm password</p> */}
                    <input 
                        type="password" 
                        onChange={e => setconfirmPassword(e.target.value)} 
                        placeholder="confirm password">    
                    </input>
                </label>
                <br></br>
                <div>
                    <button type="submit">SIGN UP</button>
                </div>
                <div>
                    <p>Already a user? <br></br> <a href="/login"> Login <span style={{fontSize: '13px', verticalAlign: 'middle'}}><FontAwesomeIcon icon={faSignInAlt}/></span></a></p>
                </div>
            </form>
        </div>
    )

}

CreateAccount.propTypes = {
    setToken: PropTypes.func.isRequired
}


export default CreateAccount;