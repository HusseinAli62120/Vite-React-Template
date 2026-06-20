import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // Since the HTTP cookie is only used in the auth process, and it is managed by better-auth.
});

export default axiosInstance;
