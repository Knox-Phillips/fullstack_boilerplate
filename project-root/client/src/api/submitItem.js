const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function submitItem({ itemName }) {
  const response = await fetch(`${API_BASE_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ itemName }),
  });
  if (!response.ok) {
    throw new Error("Failed to submit item");
  }
  const json = await response.json();
  return json;
}
