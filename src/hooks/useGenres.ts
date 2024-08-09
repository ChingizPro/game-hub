import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import APIClient from '../services/api-client';
import ms from 'ms';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    staleTime: ms('24h'),
    queryFn: apiClient.getAll,
    initialData: genres,
  });
};

export default useGenres;
