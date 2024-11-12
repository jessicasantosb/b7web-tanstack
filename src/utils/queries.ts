import { useQuery } from "@tanstack/react-query";
import { getPost, getPosts, getQuotes } from "./api";

export const usePosts = () =>
  useQuery({ queryKey: ["posts"], queryFn: getPosts, staleTime: 2000 });

export const usePost = (id: number) =>
  useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
    staleTime: 5 * (60 * 1000), // 5 minutes
  });

export const useQuotes = () =>
  useQuery({ queryKey: ["quotes"], queryFn: getQuotes, staleTime: Infinity });
