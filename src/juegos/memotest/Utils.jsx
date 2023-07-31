export const randomArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}



export const compare = (johann) =>{

    let elementToCompare = []
    
    if (elementToCompare.length < 2) {
        elementToCompare.push(johann)
        console.log(elementToCompare);
    }
    if (elementToCompare.length == 2 &&  elementToCompare[0] != elementToCompare[1]) {
        elementToCompare[0].children[0].classList.remove('hidden')
        elementToCompare[1].children[0].classList.remove('hidden')
        elementToCompare = []
    }

}



               