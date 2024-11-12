"use client";

import {
  usePost,
  usePosts,
  useQuotes,
  useQuotesPrefetch,
} from "@/utils/queries";
import { useState } from "react";

export default function Home() {
  useQuotesPrefetch();
  const [canLoadPosts, setCanLoadPosts] = useState(false);
  const [skip, setSkip] = useState(0);
  const limit = 3;

  const posts = usePosts(canLoadPosts, limit, skip * limit);
  const post = usePost(1);
  const quotes = useQuotes();

  return (
    <section className="p-4">
      <h1 className="text-center py-4">TanStack</h1>
      <div className="border p-2">
        <button
          className="mr-2 p-2 border bg-slate-300"
          onClick={() => setCanLoadPosts(!canLoadPosts)}
        >
          carregar posts
        </button>
        <p>Limite: {limit}</p>
        <p>skip: {skip}</p>
        <button
          className="mr-2 p-2 border bg-slate-300"
          onClick={() => setSkip(skip === 0 ? 0 : skip - 1)}
        >
          página anterior
        </button>
        <button
          className="p-2 border bg-slate-300"
          onClick={() => setSkip(skip + 1)}
        >
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
