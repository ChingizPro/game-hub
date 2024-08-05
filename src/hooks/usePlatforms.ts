import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import platforms from '../data/platforms';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>('/platforms');

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    staleTime: 24 * 60 * 60 * 1000,
    queryFn: apiClient.getAll,
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
