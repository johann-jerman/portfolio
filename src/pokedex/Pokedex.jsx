import { useEffect, useState } from "react";
import "./pokedex.css";
import { gen, genButton } from "./Utils";

let limit = 151;
let offset = 0;
let pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
let singlePokemonApi = "https://pokeapi.co/api/v2/pokemon/";

export function Pokedex() {
  let [pokedex, setPokedex] = useState([]);
  let [pokemon, setPokemon] = useState("oculto");
  let [api, setApi] = useState(pokeApi);

  useEffect(() => {
    requestPokedex(api);
  }, [api]);

  const requestPokedex = async (api) => {
    let req = await fetch(api);
    let res = await req.json();
    let data = await Promise.all(
      res.results?.map(async (poke) => {
        let reqPoke = await fetch(poke.url);
        let res = await reqPoke.json();
        return res;
      })
    );
    setPokedex(data);
  };

  const selectGen = (e) => {
    let { target } = e;
    switch (target.id) {
      case "Kanto":
        pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${gen.kanto.limit}&offset=${gen.kanto.offset}`;
        setApi(pokeApi);
        break;
      case "Jhoto":
        pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${gen.jhoto.limit}&offset=${gen.jhoto.offset}`;
        setApi(pokeApi);
        break;
      case "Sinno":
        pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${gen.sinno.limit}&offset=${gen.sinno.offset}`;
        setApi(pokeApi);
        break;
      case "Hoenn":
        pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${gen.hoenn.limit}&offset=${gen.hoenn.offset}`;
        setApi(pokeApi);
        break;
      case "Teselia":
        pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${gen.teselia.limit}&offset=${gen.teselia.offset}`;
        setApi(pokeApi);
        break;
      case "Kalos":
        pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${gen.kalos.limit}&offset=${gen.kalos.offset}`;
        setApi(pokeApi);
        break;
      case "Sol y Luna":
        pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${gen.sol.limit}&offset=${gen.sol.offset}`;
        setApi(pokeApi);
        break;

      default:
        break;
    }
  };

  const getSinglePokemon = async (e) => {
    let url = singlePokemonApi + e;
    let req = await fetch(url);
    let res = await req.json();
    setPokemon(res);
  };

  return (
    <main className="">
      <section className="flex justify-center m-2 my-10 flex-nowrap">
        {genButton?.map((button, i) => {
          return (
            <div
              className={
                "m-3 cursor-default border border-solid border-black-800 p-3 rounded hover:shadow-md shadow-black transition duration-300 " +
                button.color
              }
              key={i}
              id={button.name}
              onClick={selectGen}
            >
              {button.name}
            </div>
          );
        })}
      </section>
      {pokedex.length == 0 && (
        <h1 className="m-50 text-center text-2xl">
          Cargando Bateria De La Pokedex...
        </h1>
      )}

      {console.log(pokemon)}
      <div className="flex ">
        <section className="flex flex-wrap justify-center items-center">
          {pokedex?.map((pokemon) => {
            return (
              <article
                id={pokemon.name}
                onClick={() => getSinglePokemon(pokemon.name)}
                className="
            bg-white hover:shadow-md shadow-black transition duration-300
            h-100 w-52 m-6 my-10 p-3 pt-7 relative
            border border-solid border-black-800  rounded-md
            "
                key={pokemon.name}
              >
                <img
                  className="absolute left-1/2 -top-2/4 -translate-x-1/2"
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
                <p className="text-grey-100 text-center text-xs">
                  N° {pokemon.id}
                </p>
                <h3 className="text-center text-xl">{pokemon.name}</h3>
                <div className="flex items-center justify-center">
                  {pokemon.types?.map((type, i) => {
                    return (
                      <p
                        className={"m-2 p-1 rounded " + type.type.name}
                        key={i}
                      >
                        {type.type.name}
                      </p>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </section>
        {pokemon == "oculto" && <></>}
        {pokemon != "oculto" && (
          <section className="cartita h-1/2 bg-white relative">
            <article className="overflow-hidden">
          <aside className="h-1/2 m-1 bg-white">
            {
              pokemon?.sprites?.versions['generation-v']["black-white"].animated.front_default ?
              <img src={pokemon?.sprites?.versions['generation-v']["black-white"].animated.front_default} alt="" /> :
              <img src={pokemon?.sprites?.front_default} alt="" />
            }
            <p>N° {pokemon.id}</p>
            <p>Tamaño: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            <p>Tipos:</p>
            <div>
            {
              pokemon.types?.map((type, i)=>{
                return(
                  <p key={i} className={type.type.name}>{type.type.name}</p>
                  )
                })
              }
            </div>
            <div>
            {
              pokemon.abilities?.map((ab, i)=>{
                return(
                  <p key={i}>{ab.ability.name}</p>
                  )
                })
              }
            </div>
          </aside>
        </article>
          </section>
        )}
      </div>
    </main>
  );
}
