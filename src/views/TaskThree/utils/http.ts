import type { User } from "../../../types/task-three-types";

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    const error = new Error("Failed to fetch cocktails");
    throw error;
  }

  const data = await response.json();

  return data;
};
