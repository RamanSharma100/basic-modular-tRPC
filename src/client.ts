import { configDotenv } from 'dotenv';
configDotenv({});

import { tap } from '@trpc/server/observable';
import {
  createTRPCClient,
  httpBatchLink,
  loggerLink,
  type TRPCLink,
} from '@trpc/client';

import type { AppRouter } from './routes';

const sleep = (ms = 100) => new Promise((resolve) => setTimeout(resolve, ms));

const URL = `${process.env.SERVER_ENDPOINT}/trpc`;

const links =
  () =>
  ({ op, next }: any) => {
    console.log('->', op.type, op.path, op.input);

    return next(op).pipe(
      tap({
        next(result) {
          console.log('<-', op.type, op.path, op.input, ':', result);
        },
      })
    );
  };
const trpcClient = createTRPCClient<AppRouter>({
  links: [links, httpBatchLink({ url: URL }), loggerLink()],
});

await sleep();

////////////////////// Playground //////////////////////

// parallel queries
await Promise.all([trpcClient.hello.query(), trpcClient.hello.query('client')]);

const postCreate = await trpcClient.post.createPost.mutate({
  text: 'This is third Post!',
  title: 'Hello Buddy!!',
});
console.log('created post', postCreate.title);
await sleep();

const postList = await trpcClient.post.getPosts.query();
console.log('has posts', postList, 'first:', postList[0].title);
await sleep();

//////// Working with context and middleware in tRPC ////////
try {
  await trpcClient.admin.secret.query();
} catch (cause) {
  console.error('error', cause);
}
await sleep();

//// tRPC with authenticated Route ////
const authedClient = createTRPCClient<AppRouter>({
  links: [
    loggerLink(),
    httpBatchLink({
      url: URL,
      headers: () => ({
        authorization: 'secret',
      }),
    }),
  ],
});

await authedClient.admin.secret.query();

const msgs = await trpcClient.message.getMessages.query();
console.log('msgs', msgs);

console.log('This is how tRPC client works');
console.log('tRPC is awesome!!');
