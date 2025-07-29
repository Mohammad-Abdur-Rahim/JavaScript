const URL = "https://api.nationalize.io?name=nathaniel";

const getData = async () => {
  console.log("Getting Data....");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
};
