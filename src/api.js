import axios from "axios";

const api = axios.create({
  baseURL: "https://blog-backend-bpnl.onrender.com",
});

export default api;
