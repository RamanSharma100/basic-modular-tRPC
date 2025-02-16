import { EventEmitter } from 'events';

export const eventEmitter = new EventEmitter();

export type Message = {
  id: number;
  text: string;
  createdAt: Date;
  updatedAt: Date;
};

export const createMessage = (id: number, message: string) => {
  const msg: Message = {
    id: ++id,
    text: message,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  eventEmitter.emit('newMessage', msg);
  return msg;
};
