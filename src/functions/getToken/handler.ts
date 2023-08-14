//impor { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';

import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import {v4 as uuidv4} from 'uuid';
import {Card} from '../../models/card';
import { CardService }  from "../../services/cardService";
import schema from './schema';
//export const getToken = middyfy(async(event: APIGatewayProxyEvent):Promise<APIGatewayProxyResult> => {
const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    var tokenAuth = 'pk_123456';
    var currentTokenBearerAuth = event.headers['Authorization'];
    var currentTokenAuth = currentTokenBearerAuth?.substring(7);
    
    console.log(`CurrentToken:${currentTokenAuth}`);
    
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
    console.log(`Cards:${event.body.card_number}`);
    console.log(`Headers:${event.headers}`);

    var card = new Card(
            event.body.card_number,
            event.body.cvv,
            event.body.expiration_month,
            event.body.expiration_year,
            event.body.email);

    let newUUID = uuidv4();
    const token = newUUID;
    console.log(`UUID: ${token}`);
    
    //Metodo para almacenar en dynamodb
    var cardService = new CardService();
    console.log("call cardservice.getToken");
    var newToken = await cardService.getToken(card);
    console.log(`newToken:${newToken}`);

    return formatJSONResponse({
        status : 200,
        message: "exito",
        token: newToken
    })
};

export const getToken = middyfy(handler);