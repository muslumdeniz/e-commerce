import axios, { AxiosError, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const storage = localStorage.getItem("session"); // ya da cookie, session vs.
    const temp = JSON.parse(storage || "");
    const token = temp?.jwt;

    if (typeof token === "string") {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use((response: AxiosResponse<any, any>) => {
  const temp = {
    ...response,
    data: {
      data: response.data,
    },
  };
  return temp;
});

export default api;
