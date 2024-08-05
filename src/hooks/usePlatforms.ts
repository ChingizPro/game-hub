import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { FetchData } from './useData';
import platforms from '../data/platforms';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')
const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    staleTime: 24 * 60 * 60 * 1000,
    queryFn: () =>
      apiClient
        .get<FetchData<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
