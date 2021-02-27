// import axios from "axios";



export const getToken = async () => {
  const authHeader = 'Basic Yzc5MzJmNzY4MDNmOTkwOTpkY2YxYWRhMTJlMjBlYjU3MGQzYjA1NGY4MWQ3YWNjMg==';
  console.log(authHeader);

  const resp = await fetch('https://accounts.probit.com/token', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      'Authorization': authHeader

  },
    body: JSON.stringify({
        grant_type: 'client_credentials'
    })
} );

if (!resp.ok) {
    throw new Error(resp.statusText);
}
  console.log("Response",resp);

  return resp.json();
};