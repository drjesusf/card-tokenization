import { Card } from "../models/card";
import {CardRepository} from "../repositories/cardRepository";

export class CardService{
    async getToken(card: Card): Promise<string>{
        const repository = new CardRepository();
        const cardToken = await repository.AddCard(card);
        return cardToken;
    }

    async getCard(token: string): Promise<Card>{
        const repository = new CardRepository();
        const actualCard = await repository.GetCard(token);
        actualCard.cvv = "";
        return actualCard;
    }
}