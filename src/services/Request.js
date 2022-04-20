let baseURL = "https://frontend-test-api.aircall.io";

let originalRequest = async (url, config) => {
  url = `${baseURL}${url}`;
  let response = await fetch(url, config);
  let data = await response.json();
  console.log("REQUESTING", data);
  return { response, data };
};

export default originalRequest;
