import { initialPosts } from "@/data/postInitialData";
import { useQuery } from "@tanstack/react-query";
import { getPost, getPosts, getQuotes } from "./api";

export const usePosts = (enabled?: boolean, limit?: number, skip?: number) =>
  useQuery({
    queryKey: ["posts", { limit, skip }],
    queryFn: () => getPosts(limit, skip),
    enabled,
    placeholderData: initialPosts,
  });

export const usePost = (id: number) =>
  useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });

export const useQuotes = () =>
  useQuery({ queryKey: ["quotes"], queryFn: getQuotes });
