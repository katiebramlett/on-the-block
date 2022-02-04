import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const userToken = sessionStorage.getItem('token');

    console.log("STORED TOKEN: " + userToken)

    return userToken? userToken : null
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {

    console.log("SAVING TOKEN: " + userToken)

    console.log("Token being set => " + userToken);

    console.log('usetoken' + userToken);

    sessionStorage.setItem('token', userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  }
}
