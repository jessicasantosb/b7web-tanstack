import { useMutation } from "@tanstack/react-query";
import { addPost } from "./api";

export  const useAddPost = () => useMutation({ mutationFn: addPost });