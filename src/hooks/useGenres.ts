import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { FetchData } from './useData';
import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    queryFn: () =>
      apiClient.get<FetchData<Genre>>('/genres').then((res) => res.data),
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
