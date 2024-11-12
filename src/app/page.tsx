"use client";

import { getQuotes } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const posts = useQuery({ queryKey: ["post"], queryFn: getQuotes });

  return (
    <section>
      <h1 className="text-center py-4">TanStack</h1>

      {posts.data && (
        <ul>
          {posts.data.map((i) => {
            return <li key={i.id}>{i.quote}</li>;
          })}
        </ul>
      )}
    </section>
  );
}
