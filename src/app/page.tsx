"use client";

import { usePost, usePosts, useQuotes } from "@/utils/queries";
import { useState } from "react";

export default function Home() {
  const [canLoadPosts, setCanLoadPosts] = useState(false);
  const [page, setPage] = useState(0);
  const limit = 3;

  const posts = usePosts(canLoadPosts);
  const post = usePost(1);
  const quotes = useQuotes();

  return (
    <section className="p-4">
      <h1 className="text-center py-4">TanStack</h1>
      <div>
        <button onClick={() => setCanLoadPosts(!canLoadPosts)}>
          carregar posts
        </button>
        <p>Limite: {limit}</p>
        <p>Page: {page}</p>
        <button
          className="mr-2 p-2 border"
          onClick={() => setPage(page === 0 ? 0 : page - 1)}
        >
          página anterior
        </button>
        <button className="p-2 border" onClick={() => setPage(page + 1)}>
          próxima página
        </button>

        <h3 className="text-center py-4">POSTS</h3>
        {posts.isLoading && <p>Carregando...</p>}
        <p>{!post.isLoading && post.isFetching && "Recarregando..."}</p>
        {post.data && (
          <ul>
            {posts.data?.map((post) => {
              return <li key={post.id}>{post.title}</li>;
            })}
          </ul>
        )}
      </div>

      <div>
        <h3 className="text-center py-4">POST</h3>
        <p>{post.isLoading && "Carregando..."}</p>
        <p>{!post.isLoading && post.isFetching && "Recarregando..."}</p>
        <p>{post?.data?.title}</p>
      </div>

      <div>
        <h3 className="text-center py-4">QUOTES</h3>
        {quotes.isLoading && <p>Carregando...</p>}
        <p>{!post.isLoading && post.isFetching && "Recarregando..."}</p>
        {quotes.data && (
          <ul>
            {quotes?.data?.map((quote) => {
              return <li key={quote.id}>{quote.quote}</li>;
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
