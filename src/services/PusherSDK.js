import Pusher from "pusher-js";

const APP_KEY = "d44e3d910d38a928e0be";
const APP_CLUSTER = "eu";
const APP_AUTH_ENDPOINT = "https://frontend-test-api.aircall.io/pusher/auth";

export function pusherSDK() {
  //open connection to channels
  const pusher = new Pusher(APP_KEY, {
    cluster: APP_CLUSTER,
    authEndpoint: APP_AUTH_ENDPOINT,
  });

  //subscribe to the channel
  let channel = pusher.subscribe("private-aircall");
  return channel;
}
