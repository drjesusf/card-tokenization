import date from 'date-and-time';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient,PutCommand, GetCommand} from '@aws-sdk/lib-dynamodb';
import { Card } from '../models/card';
import {v4 as uuidv4} from 'uuid';

export class CardRepository{
    async AddCard(card: Card): Promise<string>{
        try{
            const dynamo = new DynamoDBClient({});
            const dynamoClient = DynamoDBDocumentClient.from(dynamo);

            const cardId = uuidv4();
            const { card_number, cvv, expiration_month, expiration_year, email } = card;

            const now = new Date();
            const format = 'YYYY/MM/DD HH:mm:ss';
            const createdAt = date.format(now, format);
            const expirationAt = date.format(date.addMinutes(now, 15), format);

            const newCard = {
                cardId,
                card_number,
                cvv,
                expiration_month,
                expiration_year,
                email,
                createdAt,
                expirationAt
            };

            //TTL
            const ttlInSeconds = 15 * 60;
            const ttl = Math.floor(Date.now() / 1000) + ttlInSeconds;
            newCard['TimeToLive'] = ttl;

            await dynamoClient.send(
                new PutCommand({
                    TableName: "CardTable",
                    Item:newCard
                })
            );
            return cardId;
        }catch(error){
            console.log(`error:${error}`);
            return "EMPTY"
        }    
    }

    async GetCard(token: string): Promise<Card>{
        try{
            const dynamo = new DynamoDBClient({});
            const dynamoClient = DynamoDBDocumentClient.from(dynamo);

            const card = await dynamoClient.send(
                new GetCommand({
                  TableName: 'CardTable',
                  Key: { 'cardId':token }
                }),
              );
            
            console.log(`card:${card}`);
            console.log("card.cardId" + card.Item.cardId);
            return <Card>(<unknown>card.Item);
        }catch(error){
            console.log(`error:${error}`);
            return new Card("NOT EXIST","","","","");
        }
    }
}