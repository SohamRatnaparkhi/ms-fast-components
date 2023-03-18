import axios from "axios";

export const TES_AXIOS_INSTANCE = axios.create({
  baseURL: "http://localhost:8080/ga4gh/tes/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
