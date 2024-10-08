import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import platforms from '../data/platforms';
import ms from 'ms';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    staleTime: ms('24h'),
    queryFn: apiClient.getAll,
    initialData: platforms,
  });
};

export default usePlatforms;
