import React, { useState } from "react";
import PropTypes from 'prop-types';
import { axiosBackend  } from "../utils/axios";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../assets/login.css"

function Login({ setToken }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError]       = useState();

    const loginUser = async e => {
        e.preventDefault();

        return axiosBackend
            .post('login', {username, password})
            .then(response => {
                setToken(response.data.token)
                window.location.href = '/' 
            })
            .catch(e => {
                console.log(e)
                setError("Invalid username or password.")
            });
    }

    return (
        <div className="login-wrapper">
            <form onSubmit={loginUser}>
                <h1> Login </h1>
                <label>
                    {/* <p>username </p> */}
                    <input 
                        type="text" 
                        onChange={e => setUsername(e.target.value)} 
                        placeholder="username">
                    </input>
                </label>
                <label>
                    {/* <p>password </p> */}
                    <input 
                        type="password" 
                        onChange={e => setPassword(e.target.value)} 
                        placeholder="password">
                    </input>
                </label>
                {
                    error && <div style={{color: 'white'}}>{error}</div>
                }
                <div>
                    <button type="submit">LOGIN</button>
                </div>
                <div>
                    <p>New to On The Block? <br></br> <a href="/createAccount">Create an account <span style={{fontSize: '10px', verticalAlign: 'middle'}}><FontAwesomeIcon icon={faPlus}/></span></a></p>
                </div>
            </form>
        </div>
    );
}
/* Proptypes check for if the system data matched expected types during runtime */
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;