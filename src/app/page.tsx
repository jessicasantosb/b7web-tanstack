"use client";

import { PostProps } from "@/types/Posts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
  const posts = useQuery({
    queryKey: ["posts"],
    queryFn: async (): Promise<PostProps[]> => {
      const result = await axios.get("https://dummyjson.com/posts");
      return result.data.posts;
    },
  });

  return (
    <section>
      <h1 className="text-center py-4">TanStack</h1>

      {posts.data && (
        <ul>
          {posts.data.map(({ id, title }) => {
            return <li key={id}>{title}</li>;
          })}
        </ul>
      )}
    </section>
  );
}
