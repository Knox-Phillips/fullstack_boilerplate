import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateItem } from "../api/updateItem";

export function useUpdate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
    onError: (err) => {
      console.error("Submit error:", err);
    },
  });
}
