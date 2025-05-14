const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function updateItem({ itemId, itemName }) {
  const response = await fetch(`${API_BASE_URL}/items`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ itemId, itemName }),
  });
  if (!response.ok) {
    throw new Error("Failed to submit item");
  }
  const json = await response.json();
  return json;
}
