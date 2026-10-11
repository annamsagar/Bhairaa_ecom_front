import axios from "axios";

const apiBase = import.meta.env.VITE_API_URL || "https://bhairaa-ecom-backend.onrender.com";

const API = axios.create({
  baseURL: `${apiBase}/api`,
});

delete API.defaults.headers.common["Authorization"];

export default API;
