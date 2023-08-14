import { handlerPath } from '@libs/handler-resolver';

export const getCard = {
  handler: `${handlerPath(__dirname)}/handler.getCard`,
  events: [
    {
        http: {
            method: 'post',
            path: 'getCard/'
        },
    },
  ],
};
