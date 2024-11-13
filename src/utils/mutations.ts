// import { PostProps } from "@/types/Posts";
import { useMutation } from "@tanstack/react-query";
import { addPost } from "./api";
import { queryClient } from "./queryClient";

export const useAddPost = () => {
  return useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },

    // render new data without a new fetching

    // onSuccess: (newPost: PostProps) => {
    //   const posts = queryClient.getQueryData(["posts"]) as PostProps[];
    //   queryClient.setQueryData(["posts"], [newPost, ...posts]);
    // },
  });
};
