import { z } from 'zod';
import { TRPCError } from '@trpc/server';

import { postRouter } from './post.routes';
import { messageRouter } from './message.routes';
import { publicProcedure, router } from '../trpc-server';

const appRouter = router({
  post: postRouter,
  message: messageRouter,
  hello: publicProcedure.input(z.string().nullish()).query(({ input, ctx }) => {
    return `hello ${input ?? ctx.user?.name ?? 'world'}`;
  }),
  admin: router({
    secret: publicProcedure.query(({ ctx }) => {
      if (!ctx.user) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
      }
      if (ctx.user?.name !== 'Raman Sharma') {
        throw new TRPCError({ code: 'FORBIDDEN' });
      }
      return {
        secret: 'sauce',
      };
    }),
  }),
});

export type AppRouter = typeof appRouter;

export default appRouter;
