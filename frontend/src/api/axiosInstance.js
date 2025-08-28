import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // change to your backend URL
  withCredentials: true, // important if you're using cookies (for refresh tokens)
});

// default export
export default api;
