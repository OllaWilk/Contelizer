import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../utils/http';

export function useUserQuery(perPage = 500) {
  return useQuery({
    queryKey: ['users', { perPage }],
    queryFn: () => fetchUsers(perPage),
    // staleTime: 1000 * 60,
    // gcTime: 30000,
    // refetchOnWindowFocus: false,
  });
}
