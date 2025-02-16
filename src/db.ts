import { createMessage } from './events';

export let id = 0;

export const db = {
  posts: [
    {
      id: ++id,
      title: 'hello world',
      text: 'this is the first post!',
    },
    {
      id: ++id,
      title: 'hello again',
      text: 'this is the second post!',
    },
  ],
  messages: [createMessage(id, 'initial message')],
};
