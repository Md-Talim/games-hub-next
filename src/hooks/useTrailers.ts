import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import Trailer from '../types/Trailer';

const useTrailers = (slug: string) => {
  const apiClient = new APIClient<Trailer>(`/games/${slug}/movies`);

  return useQuery({
    queryKey: ['trailers', slug],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
