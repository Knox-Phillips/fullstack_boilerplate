const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function getItem() {
  const response = await fetch(`${API_BASE_URL}/items`);
  const json = await response.json();
  return json;
}
