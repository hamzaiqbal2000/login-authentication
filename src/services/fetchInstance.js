import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import originalRequest from "./Request";
import { refreshToken } from "./login";

let customFetcher = async (url, config = {}) => {
  let authTokens = sessionStorage.getItem("token")
    ? JSON.parse(sessionStorage.getItem("token"))
    : null;

  const user = jwt_decode(authTokens.access_token);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (isExpired) {
    authTokens = await refreshToken(authTokens);
    console.log("authtoken", authTokens);
    sessionStorage.setItem("token", JSON.stringify(authTokens));
  }
  //proceed with the request
  config["headers"] = {
    Authorization: `Bearer ${authTokens?.access_token}`,
  };

  console.log("before request");
  let { response, data } = await originalRequest(url, config);
  console.log("after request");
  return { response, data };
};

export default customFetcher;
