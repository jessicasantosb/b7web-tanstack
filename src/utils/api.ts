import { PostProps } from "@/types/Posts";
import { QuotesProps } from "@/types/Quotes";
import axios from "axios";

const req = axios.create({ baseURL: "https://dummyjson.com" });

export const getPosts = async (): Promise<PostProps[]> => {
  const response = await req.get("/posts");
  return response.data.posts;
};

export const getPost = async (id: number): Promise<PostProps> => {
  const response = await req.get(`/post/${id}`);
  return response.data;
};

export const getQuotes = async (): Promise<QuotesProps[]> => {
  const response = await req.get("/quotes");
  return response.data.quotes;
};
