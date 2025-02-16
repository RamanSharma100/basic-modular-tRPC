import { z } from 'zod';

const envSchema = z.object({
  PORT: z.number().default(9000),
  SERVER_ENDPOINT: z.string().default('http://localhost:9000'),
});

export type Env = z.infer<typeof envSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
