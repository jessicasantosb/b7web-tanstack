import { useQuery } from "@tanstack/react-query";
import { getPost, getPosts, getQuotes } from "./api";

export const usePosts = (enabled?: boolean) =>
  useQuery({ queryKey: ["posts"], queryFn: getPosts, enabled });

export const usePost = (id: number) =>
  useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });

export const useQuotes = () =>
  useQuery({ queryKey: ["quotes"], queryFn: getQuotes });
