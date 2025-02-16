import type { z } from 'zod';

import { db } from '../db';
import { MessageInput } from '../inputs';
import type { Message } from '../events';

export class MessageController {
  private static instance: MessageController;

  static getInstance = () => {
    if (!MessageController.instance) {
      MessageController.instance = new MessageController();
    }

    return MessageController.instance;
  };
  addMessage = ({ input }: { input: z.infer<typeof MessageInput> }) => {
    const message: Message = {
      id: db.messages[db.messages.length - 1].id + 1,
      text: input,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    db.messages.push(message);

    return message;
  };

  getMessages = () => db.messages;
}
