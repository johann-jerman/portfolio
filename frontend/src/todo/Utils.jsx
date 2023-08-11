export const createCard = (card)=>{
    let task = getCardsStorage()
    let cardToAdd = {
        id: Date.now(),
        text: card
    }
    task.push(cardToAdd)
    setCardsStorage(task)
    console.log(getCardsStorage());
}

export const deleteCard = (id)=>{
    let storage = getCardsStorage();
    let result = storage.filter(card => card.id != id)
    setCardsStorage(result)
    console.log(getCardsStorage());
}

export const deleteAllCard = ()=>{
    setCardsStorage([])
}

export const setCardsStorage = (cards)=>{
    return localStorage.setItem("task", JSON.stringify(cards));
}
export const getCardsStorage = ()=>{
    return JSON.parse(localStorage.getItem("task")) || [];
}



