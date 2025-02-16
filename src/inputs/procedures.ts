import { z } from 'zod';

export const PostInput = z.object({
  title: z.string(),
  text: z.string(),
});

export const MessageInput = z.string();
