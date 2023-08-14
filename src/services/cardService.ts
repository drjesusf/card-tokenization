import { Card } from "../models/card";
import {CardRepository} from "../repositories/cardRepository";

export class CardService{
    async getToken(card: Card): Promise<string>{
        console.log("enter CardService.getToken");
        const repository = new CardRepository();
        const cardToken = await repository.AddCard(card);
        return cardToken;
    }

    async getCard(token: string): Promise<Card>{
        console.log("enter getCard");

        const repository = new CardRepository();
        const actualCard = await repository.GetCard(token);
        actualCard.cvv = "";
        return actualCard;
    }
}