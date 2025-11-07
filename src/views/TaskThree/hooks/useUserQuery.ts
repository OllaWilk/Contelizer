import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../utils/http';

export function useUserQuery(perPage = 500, searchTerm = '') {
  return useQuery({
    queryKey: ['users', { perPage, searchTerm }],
    queryFn: () => fetchUsers(perPage, searchTerm),
    placeholderData: (previousData) => previousData,
  });
}
