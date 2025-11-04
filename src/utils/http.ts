const apiUrl = import.meta.env.VITE_API_URL as string;

console.log('API URL:', apiUrl);

export const fetchData = () => {};

export const fetchOne = async (id: number) => {
  console.log(id);
};
