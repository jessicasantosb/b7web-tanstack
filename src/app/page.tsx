"use client";

import { usePost, usePosts, useQuotes } from "@/utils/queries";

export default function Home() {
  const posts = usePosts();
  const post = usePost(1);
  const quotes = useQuotes();

  return (
    <section>
      <h1 className="text-center py-4">TanStack</h1>

      <h3 className="text-center py-4">POSTS</h3>
      {posts.isLoading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {posts?.data?.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}

      <h3 className="text-center py-4">POST</h3>
      <p>{post.isLoading ? "Carregando..." : post?.data?.title}</p>

      <h3 className="text-center py-4">QUOTES</h3>
      {quotes.isLoading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {quotes?.data?.map((quote) => {
            return <li key={quote.id}>{quote.quote}</li>;
          })}
        </ul>
      )}
    </section>
  );
}
