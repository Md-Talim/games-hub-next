import axios from 'axios';

export interface fetchDataResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});
