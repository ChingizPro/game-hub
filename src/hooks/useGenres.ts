import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import APIClient from '../services/api-client';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    queryFn: apiClient.getAll,
    initialData: genres,
  });
};

export default useGenres;
