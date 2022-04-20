import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    //session storage
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.access_token;
  };

  const [token, setToken] = useState(getToken());

  function saveToken(userToken, config = {}) {
    //session storage
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.access_token);
    config["headers"] = {
      Authorization: `Bearer ${userToken?.access_token}`,
    };
  }

  function removeToken() {
    sessionStorage.removeItem("token");
    setToken(null);
  }

  return {
    setToken: saveToken,
    token,
    logout: removeToken,
  };
};

export default useToken;
