import React, { useState } from "react";
import PropTypes from 'prop-types';

import "../assets/login.css"

async function loginUser(credentials) {

    const url = 'http://localhost:8081/login'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(credentials)
    }

    console.log(JSON.stringify(credentials))

    return fetch(url, options)
        .then(data => data.json())
}

function Login({ setToken }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        const token = await loginUser({
            username,
            password
        });

        setToken(token);
    }

    return (
        <div className="login-wrapper">
            <form onSubmit={handleSubmit}>
                <h1> Login </h1>
                <label><p>username </p><input type="text" onChange={e => setUsername(e.target.value)} placeholder="username"></input></label>
                <label><p>password </p><input type="password" onChange={e => setPassword(e.target.value)} placeholder="password"></input></label>
                <div>
                    <button type="submit">LOGIN</button>
                </div>
                {/* <span>Forgot <a href="">password</a></span> */}
            </form>
        </div>
    );
}
/* Proptypes check for if the system data matched expected types during runtime */
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;