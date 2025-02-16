import type { z } from 'zod';

import { db } from '../db';
import { PostInput } from '../inputs';

export class PostController {
  private static instance: PostController;

  static getInstance = () => {
    if (!PostController.instance) {
      PostController.instance = new PostController();
    }

    return PostController.instance;
  };
  createPost = ({ input }: { input: z.infer<typeof PostInput> }) => {
    const post = {
      id: db.posts[db.posts.length - 1].id + 1,
      ...input,
    };

    db.posts.push(post);

    return post;
  };

  getPosts = () => db.posts;
}
