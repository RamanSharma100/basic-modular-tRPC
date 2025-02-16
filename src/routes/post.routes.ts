import { router, t } from '../trpc-server';
import { PostInput } from '../inputs';
import { PostController } from '../controllers';

const postController = PostController.getInstance();

const createPost = t.procedure
  .input(PostInput)
  .mutation(postController.createPost);

const getPosts = t.procedure.query(postController.getPosts);

export const postRouter = router({
  createPost,
  getPosts,
});
