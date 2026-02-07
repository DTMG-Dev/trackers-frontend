const API_URL = import.meta.env.VITE_API_URL;

export const getTrackers = async () => {
  const res = await fetch(`${API_URL}/users`);
  return res.json();
};
