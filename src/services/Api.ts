import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.ipdata.co/",
  method: "GET",
  headers: { Accept: "application/json" },
});

export default Api;
