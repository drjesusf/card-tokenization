import { handlerPath } from '@libs/handler-resolver';

export const getToken = {
  handler: `${handlerPath(__dirname)}/handler.getToken`,
  events: [
    {
        http: {
            method: 'post',
            path: 'getToken/'
        },
    },
  ],
};
