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
  cache: Map<string, T | FetchDataResponse<T>> = new Map();

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config?: AxiosRequestConfig) => {
    const cacheKey = `${this.endpoint}_all`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey) as FetchDataResponse<T>;
    }

    const res = await axiosInstance.get<FetchDataResponse<T>>(
      this.endpoint,
      config
    );
    this.cache.set(cacheKey, res.data);
    return res.data;
  };

  get = async (id: number | string) => {
    const cacheKey = `${this.endpoint}_${id}`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey) as T;
    }

    const res = await axiosInstance.get<T>(this.endpoint + "/" + id);
    this.cache.set(cacheKey, res.data);

    return res.data;
  };
}

export default APIClient;
