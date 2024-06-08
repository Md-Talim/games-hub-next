import axios, { AxiosRequestConfig } from "axios";

export interface FetchDataResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  params: {
    key: process.env.API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config?: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchDataResponse<T>>(
      this.endpoint,
      config
    );
    return res.data;
  };

  get = async (id: number | string) => {
    const res = await axiosInstance.get<T>(this.endpoint + "/" + id);
    return res.data;
  };
}

export default APIClient;
