import { post_request } from "../../../Helpers/request_api";

export const login = (userCredentials = {}) => {
  // console.log(post_request("http://localhost:3001/login", "json", userCredentials));
  fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content Type": "application/json",
    },
    body: JSON.stringify(userCredentials),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
