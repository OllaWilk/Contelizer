import { useQuery } from '@tanstack/react-query';
import { fetchData } from './http';

export const useUsersQuery = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => fetchData(),
    staleTime: 1000 * 60,
    gcTime: 30000,
    refetchOnWindowFocus: false,
  });
};
