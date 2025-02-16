import { router, t } from '../trpc-server';
import { MessageInput } from '../inputs';
import { MessageController } from '../controllers';

const messageController = MessageController.getInstance();

const addMessage = t.procedure
  .input(MessageInput)
  .mutation(messageController.addMessage);

const getMessages = t.procedure.query(messageController.getMessages);

export const messageRouter = router({
  addMessage,
  getMessages,
});
