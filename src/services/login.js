const BaseURL = "https://frontend-test-api.aircall.io";
const Login_URL = "/auth/login";
const refreshURL = "/auth/refresh-token";

export function loginUser(credentials) {
  return fetch(`${BaseURL}${Login_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export function refreshToken(authTokens) {
  console.log("refresh token", authTokens.refresh_token);
  return fetch(`${BaseURL}${refreshURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(authTokens.refresh_token),
  }).then((data) => data.json());
}
