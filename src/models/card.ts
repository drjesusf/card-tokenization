export class Card{
    card_number: string;
    cvv: string;
    expiration_month: string;
    expiration_year: string;
    email: string;
    cardId: string;

    constructor(card_number: string, cvv: string, expiration_month: string, expiration_year : string, email: string){
        this.card_number = card_number;
        this.cvv = cvv;
        this.expiration_month = expiration_month;
        this.expiration_year = expiration_year;
        this.email = email;

        this.cardId = "";
    }
} 