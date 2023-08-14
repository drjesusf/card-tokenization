import { handlerPath } from '@libs/handler-resolver';
import schema from './schema';

export const getToken = {
  handler: `${handlerPath(__dirname)}/handler.getToken`,
  events: [
    {
        http: {
            method: 'post',
            path: 'getToken/',
            request:{
              schemas:{
                'application/json': schema
              }
            }
        },
    },
  ],
};
