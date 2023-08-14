import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';

import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import {v4 as uuidv4} from 'uuid';
import {Card} from '../../models/card';
import { CardService }  from "../../services/cardService";
import schema from './schema';

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    let tokenAuth = 'pk_123456';
    let currentTokenBearerAuth = event.headers['Authorization'];
    let currentTokenAuth = currentTokenBearerAuth?.substring(7);
    
    if(currentTokenAuth !== tokenAuth){
        return formatJSONResponse({
            status : 401,
            message: "Invalid Token"
        })
        
    }
    if(event.body == null){
        return formatJSONResponse({
            status : 400,
            message: "bad request"
        })
    }

    let card = new Card(
            event.body.card_number,
            event.body.cvv,
            event.body.expiration_month,
            event.body.expiration_year,
            event.body.email);
    
    //Metodo para almacenar en dynamodb
    let cardService = new CardService();
    let newToken = await cardService.getToken(card);

    return formatJSONResponse({
        status : 200,
        message: "exito",
        token: newToken
    })
};

export const getToken = middyfy(handler);