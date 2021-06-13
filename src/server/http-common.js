import axios from "axios";

export default axios.create({
  baseURL: "https://60bf813897295a0017c43099.mockapi.io",
  headers: {
    "Content-type": "application/json"
  }
});
