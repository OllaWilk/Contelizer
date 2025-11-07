import type { User } from '../../../types/task-three-types';

const apiUrl = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_GOREST_TOKEN;

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(`${apiUrl}/users?per_page=100`);

  if (!response.ok) {
    const error = new Error('Failed to fetch cocktails');
    throw error;
  }

  const data = await response.json();

  return data;
};

export const updateUser = async (id: number, data: Partial<User>) => {
  const res = await fetch(`${apiUrl}/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to update user: ${error}`);
  }

  return res.json();
};
