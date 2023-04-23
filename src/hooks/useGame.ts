import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface fetchGameResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading((prevState) => (prevState = true));
    apiClient
      .get<fetchGameResponse>('/games')
      .then((res) => {
        setGames(res.data.results);
        setIsLoading((prevState) => (prevState = false));
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading((prevState) => (prevState = false));
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGame;
