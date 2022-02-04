import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const userToken = sessionStorage.getItem('token');

    return userToken? userToken : null
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    
    sessionStorage.setItem('token', userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  }
}
