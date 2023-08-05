// let limit = 151;
// let offset = 0;
// export let pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
export const gen = {
  kanto: {
    limit: 151,
    offset: 0,
  },
  jhoto: {
    limit: 100,
    offset: 151,
  },
  hoenn: {
    limit: 135,
    offset: 251,
  },
  sinno: {
    limit: 108,
    offset: 386,
  },
  teselia: {
    limit: 155,
    offset: 494,
  },
  kalos: {
    limit: 72,
    offset: 649,
  },
  sol: {
    limit: 88,
    offset: 721,
  },
};

export const genButton = [
  {
    name: "Kanto",
    color: "fire",
  },
  {
    name: "Jhoto",
    color: "grass",
  },
  {
    name: "Hoenn",
    color: "ground",
  },
  {
    name: "Sinno",
    color: "ice",
  },
  {
    name: "Teselia",
    color: "dark",
  },
  {
    name: "Kalos",
    color: "fairy",
  },
  {
    name: "Sol y Luna",
    color: "electric",
  },
  {
    name: "Todos",
    color: "normal",
  },
];

export const selectImage = (availableImage, shyni) => {
  let animated = availableImage.sprites?.versions["generation-v"]["black-white"]
  .animated?.front_default 

  let shyniAnimated = availableImage.sprites?.versions["generation-v"]["black-white"]
  .animated?.front_shiny 

  if (shyniAnimated && shyni) {
   return {
    image: shyniAnimated,
    shyni: true
   }
   
  } 
  if (!shyniAnimated && shyni) {
    return {
      image:  availableImage?.sprites?.front_shiny,
      shyni: true
    }
  }
  
  if (animated && !shyni) {
    return {
      image:  animated,
      shyni: false
    }
  }else{
    return {
      image:  availableImage?.sprites?.front_default,
      shyni: false
    }
  }

}