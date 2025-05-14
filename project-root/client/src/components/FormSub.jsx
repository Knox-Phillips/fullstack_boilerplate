import { useState } from "react";
import { useSubmitItem } from "../hooks/useSubmitItem";
import toast from "react-hot-toast";

function FormSub() {
  const {
    mutate,
    isPending,
    isError: submitError,
    error: submitErr,
  } = useSubmitItem();

  const [itemName, setItemName] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (itemName.trim() === "") return;
      await mutate({ itemName });
      toast.success("Item created successfully");
      setItemName("");
    } catch {
      toast.error("Error creating item");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-3 items-center mb-6">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Add item"
          className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {isPending ? "Adding..." : "Add"}
        </button>
      </form>

      {submitError && (
        <p className="text-red-600 mb-2">Error: {submitErr.message}</p>
      )}
    </div>
  );
}

export default FormSub;
