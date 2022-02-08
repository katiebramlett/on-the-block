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
    const [error, setError] = useState();

    const createAccount = async e => {

        e.preventDefault()

        if (!username) setError("Username is a required field."); 
        else if (!password) setError("Password is required field.");
        else if (!confirmPassword) setError("Please confirm your password.")
        else if (password != confirmPassword) setError("Passwords must match.") 

        // all input is correct, attempt to create a new user 
        else {
            // const token =  await axiosBackend
            //     .post('users/create', {username, password})
            //     .then(response => {
            //         setToken(response.data.token)
            //         window.location.href = '/'

            //     })
            //     .catch(e => {
            //         console.log(e)
            //         setError("Invalid username or password.")
            //     });


            // setToken(token);
            setToken("test1234")
            // window.location.href = '/ ????   
        }
    }

    return (
        <div className="create-account-wrapper">
            <form onSubmit={createAccount}>
                <h1>Create an Account</h1>
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
                        type="password" 
                        onChange={e => setPassword(e.target.value)} 
                        placeholder="password">
                    </input>
                </label>
                <br></br>
                <label>
                    {/* <p>confirm password</p> */}
                    <input 
                        type="password" 
                        onChange={e => setconfirmPassword(e.target.value)} 
                        placeholder="confirm password">    
                    </input>
                </label>
                <br></br>
                {
                    error && <div style={{color: 'white'}}>{error}</div>
                }
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

CreateAccount.propTypes = {
    setToken: PropTypes.func.isRequired
}


export default CreateAccount;