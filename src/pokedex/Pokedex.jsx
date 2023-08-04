import { useEffect, useState } from "react";
import "./pokedex.css";
import { gen } from "./Utils";

let limit = 1000;
let offset= 151;
const pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${gen.jhoto.limit}&offset=${gen.jhoto.offset}`;

export function Pokedex() {
  let [pokedex, setPokedex] = useState([]);
  let [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    requestPokedex(pokeApi);
  }, []);

  const requestPokedex = async (api) => {
    const req = await fetch(api);
    const res = await req.json();
    const data = await Promise.all(
      res.results?.map(async (poke) => {
        let reqPoke = await fetch(poke.url);
        let res = await reqPoke.json();
        return res;
      })
    );
    setPokedex(data);
  };

  return (
    <main>
      {pokedex.length == 0 && (
        <h1 className="m-50 text-center text-2xl">
          Cargando Bateria De La Pokedex...
        </h1>
      )}

      {/* {console.log(pokedex[4])} */}

      <section className="flex flex-wrap justify-center items-center">
        {pokedex?.map((pokemon) => {
          return (
            <article
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
                N° {pokemon.id }
              </p>
              <h3 className="text-center text-xl">{pokemon.name}</h3>
              <div className="flex items-center justify-center">
                {pokemon.types?.map((type, i) => {
                  return (
                    <p className={"m-2 p-1 rounded " + type.type.name} key={i}>
                      {type.type.name}
                    </p>
                  );
                })}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
