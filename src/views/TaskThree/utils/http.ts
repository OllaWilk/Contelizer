// const apiUrl = import.meta.env.VITE_API_URL;
export type User = {
  id: number;
  name: string;
  email: string;
  gender: "male" | "female";
  status: "active" | "inactive";
};

const apiUrl = "https://gorest.co.in/public/v2/users";

export const fetchUsers = async (): Promise<any[]> => {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    const error = new Error("Failed to fetch cocktails");
    throw error;
  }

  const data = await response.json();

  return data;
};
