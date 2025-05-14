import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitItem } from "../api/submitItem";

export function useSubmitItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
    onError: (err) => {
      console.error("Submit error:", err);
    },
  });
}
