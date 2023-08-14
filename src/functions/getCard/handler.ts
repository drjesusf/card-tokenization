import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { CardService }  from "../../services/cardService";

export const getCard = middyfy(async(event: APIGatewayProxyEvent):Promise<APIGatewayProxyResult> => {
    var tokenAuth = 'pk_123456';
    var currentTokenBearerAuth = event.headers['Authorization'];
    var currentTokenAuth = currentTokenBearerAuth?.substring(7);

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

    var token = event.body.token;
    
    //Metodo para obtener desde dynamodb
    var cardService = new CardService();
    let currentCard = await cardService.getCard(token);

    const card = {
        cardId:currentCard.cardId,
        card_number:currentCard.card_number,
        expiration_month:currentCard.expiration_month,
        expiration_year:currentCard.expiration_year,
        email:currentCard.email
    };

    return formatJSONResponse({
        status : 200,
        message: "exito",
        card: card
    })
})