export const post_request = (path, type, data = {}) => {

  const cType = () => {
    if(type === "json"){
      return "application/x-www-form-urlencoded"
    }else{
      return "applications/json";
    }
  }

  fetch(path, {
    method: "POST",
    headers: {
      "Content Type": {cType},
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => err);
};
