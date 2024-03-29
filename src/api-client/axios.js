import axios from "axios";

const ioApiClient = axios.create({
  baseURL: "http://165.22.8.203:8000",
  timeout: 250000,
  headers: {
    common: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  },
});

ioApiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("io_at");
    if (token) {
      config.headers["Authorization"] = `bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

ioApiClient.interceptors.response.use(
  (response) => {
    const customResponse = {
      status: response.status,
      data: response.data,
    };

    return customResponse;
  },
  async (error) => {
    const strErrorMsg =
      typeof error.response.data === "string"
        ? { detail: error.response.data }
        : error.response.data || { detail: error.message };
    const customError = {
      status: error.response.status,
      data: strErrorMsg,
    };
    if (error.config.url !== "/auth/token" && error.response.status === 401) {
      localStorage.clear();
      window.location.href = "/auth/login";
    }
    return Promise.reject(customError);
  }
);

export default ioApiClient;
