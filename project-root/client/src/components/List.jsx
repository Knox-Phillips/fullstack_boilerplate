import { useList } from "../hooks/useList";
import { Trash2, Pencil } from "lucide-react";
import { useDelete } from "../hooks/useDelete";
import { useUpdate } from "../hooks/useUpdate";
import { useState } from "react";
import toast from "react-hot-toast";

function List() {
  const { data: items, isLoading, isError, error } = useList();
  const { mutate: deleteItem } = useDelete();
  const { mutate: updateItem } = useUpdate();

  const [editingItemId, setEditingItemId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSave = async (itemId) => {
    try {
      await updateItem({ itemId, itemName: editText });
      toast.success("Item updated sucessfully");
      setEditingItemId(null);
      setEditText("");
    } catch {
      toast.error("Error updating item");
    }
  };
  const handleDelete = async (itemId) => {
    try {
      await deleteItem({ itemId });
      toast.success("Item deleted sucessfully");
    } catch {
      toast.error("Error deleting item");
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : items.length === 0 ? (
        <p className="text-gray-500">No items found.</p>
      ) : (
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.itemId}
              className="bg-white px-4 py-3 rounded-md shadow flex items-center justify-between border border-gray-100"
            >
              {editingItemId === item.itemId ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSave(item.itemId);
                  }}
                />
              ) : (
                <span className="text-gray-800">{item.itemName}</span>
              )}
              <div>
                {editingItemId === item.itemId ? (
                  <button
                    onClick={() => handleSave(item.itemId)}
                    className="text-green-600 hover:text-green-800 mx-3"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditingItemId(item.itemId);
                      setEditText(item.itemName);
                    }}
                    className="text-blue-500 hover:text-blue-700 transition mx-3"
                  >
                    <Pencil size={20} />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(item.itemId)}
                  className="text-red-500 hover:text-red-700 transition"
                  aria-label="Delete item"
                  title="Delete item"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
