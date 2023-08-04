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
];

