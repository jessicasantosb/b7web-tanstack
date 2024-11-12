import { PostProps } from "@/types/Posts";

export const initialPosts: PostProps[] = [
  {
    id: 1,
    title: "Título fake 1",
    body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    tags: ["magical", "history", "french"],
    reactions: {
      likes: 1448,
      dislikes: 39,
    },
    views: 4152,
    userId: 16,
  },

  {
    id: 2,
    title: "Título fake 2",
    body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
    tags: ["mystery", "english", "american"],
    reactions: {
      likes: 359,
      dislikes: 18,
    },
    views: 4548,
    userId: 47,
  },
];
