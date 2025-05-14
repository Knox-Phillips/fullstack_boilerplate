const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function deleteItem({ itemId }) {
  const response = await fetch(`${API_BASE_URL}/items`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ itemId }),
  });
  if (!response.ok) {
    throw new Error("Failed to delete item");
  }
  const json = await response.json();
  return true;
}
