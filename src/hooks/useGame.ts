import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
  id: number;
  name: string;
}

interface fetchGameResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<fetchGameResponse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGame;
