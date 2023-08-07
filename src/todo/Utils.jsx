
export const setCardsStorage = (cards)=>{
    return localStorage.setItem("cards", JSON.stringify(cards));
}
export const getCardsStorage = ()=>{
    return JSON.parse(localStorage.getItem("cards")) || [];
}
export class Cards {
    static addCard(card){
        let cards = this.getCards();
        console.log(card);
    }
    static deleteCard(id){

    }
    setCards(cards) {
        return localStorage.setItem("cards", JSON.stringify(cards));
    }   
    static getCards(){
        return JSON.parse(localStorage.getItem("cards")) || [];
    }
}
