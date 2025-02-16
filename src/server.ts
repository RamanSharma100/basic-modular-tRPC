import { configDotenv } from 'dotenv';
configDotenv({});

import express, { type Request, type Response } from 'express';

import {
  type Context,
  t,
  router,
  publicProcedure,
  createContext,
  trpcExpress,
} from './trpc-server';

import appRouter, { type AppRouter } from './routes';

const app = express();

app.use((req, res, next) => {
  console.log('⬅️ ', req.method, req.path, req.body ?? req.query);
  next();
});

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to tRPC with Express server Example!!' });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({
    message: 'Server is up and running!!',
    status: 200,
    uptime: process.uptime(),
  });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
