import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItem } from "../api/deleteItem";

export function useDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteItem,
    queryKey: ["lists"],
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["lists"] }),
  });
}
