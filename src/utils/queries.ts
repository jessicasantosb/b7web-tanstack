import { initialPosts } from "@/data/postInitialData";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPost, getPosts, getQuotes } from "./api";
import { queryClient } from "./queryClient";

export const usePosts = (enabled?: boolean, limit?: number, skip?: number) => {
  return useQuery({
    queryKey: ["posts", { limit, skip }],
    queryFn: () => getPosts(limit, skip),
    enabled,
    placeholderData: initialPosts,
  });
};

export const usePost = (id: number) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });
};

export const useQuotes = () => {
  return useQuery({ queryKey: ["quotes"], queryFn: getQuotes });
};

export const useQuotesPrefetch = () => {
  const queryClient = useQueryClient();

  return queryClient.prefetchQuery({
    queryKey: ["quotes"],
    queryFn: getQuotes,
  });
};

export const invalidatePosts = () => {
  queryClient.invalidateQueries({
    queryKey: ["posts"],
  });
};
