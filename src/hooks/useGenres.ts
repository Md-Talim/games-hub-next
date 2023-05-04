import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import apiClient from '../services/api-client';
import { fetchDataResponse } from './useData';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient
        .get<fetchDataResponse<Genre>>('/genres')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 100, // 24 hours
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
