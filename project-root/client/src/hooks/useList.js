import { useQuery } from "@tanstack/react-query";
import { getItem } from "../api/getItem";

export function useList() {
  return useQuery({
    queryFn: getItem,
    queryKey: ["lists"],
  });
}
