import axios from "axios";

const instance = axios.create({
  headers: {
    "Content-type": `application/json`,
  },
  baseURL: "http://localhost:5502/api/v1/",
});

instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("userData"));
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
