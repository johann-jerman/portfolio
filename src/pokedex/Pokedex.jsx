import { useEffect, useState } from "react";
import "./pokedex.css";
import { gen, genButton, selectImage } from "./Utils";

let limit = 151;
let offset = 0;
let pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
let singlePokemonApi = "https://pokeapi.co/api/v2/pokemon/";

export function Pokedex() {
  let [pokedex, setPokedex] = useState([]);
  let [pokemon, setPokemon] = useState("oculto");
  let [api, setApi] = useState(pokeApi);
  let [mainWidth, setMainWidth] = useState("w-auto");
  let [pokemonImage, setPokemonImage] = useState({image: "", shyni: false});
  // let [shyni, setShyni] = useState(0);

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
      case "Todos":
        pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0`;
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

    let reqEntry = await fetch(res.species.url);
    let resEntry = await reqEntry.json();
    let entry = resEntry.flavor_text_entries.find((entry) => {
      return entry.language.name === "es";
    });
    res.entry = entry.flavor_text;

    setPokemonImage(selectImage(res, pokemonImage.shyni))
    setPokemon(res);
    setMainWidth("w-5/6");
  };

  const hiddenPokemon = () => {
    setPokemon("oculto");
    setMainWidth("w-auto")
  }

  const handleShiny = ()=>{
    setPokemonImage(previousImage => ({
      ...previousImage,
      shyni: !previousImage.shyni
    }));
  
    setPokemonImage(selectImage(pokemon, !pokemonImage.shyni));
  }
  

  return (
    <main className="">
      {/* Seccion generaciones de pokemon */}
      <section className="flex justify-center m-2 my-10 flex-wrap">
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
      {/* Seccion bateria pokedex */}
      {pokedex.length == 0 && (
        <h1 className="m-50 text-center text-2xl">
          Cargando Bateria De La Pokedex...
        </h1>
      )}

      {/* Seccion pokedex */}
      <div className="flex ">
        <section
          className={"flex flex-wrap justify-center items-center " + mainWidth}
        >
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
        
        {/* Seccion dereche de pokemon */}
        {pokemon == "oculto" && <></>}
        {pokemon != "oculto" && (
          <section
            className="w-1/6 h-1/2
          rounded border border-black-800 border-solid
          hover:shadow-md shadow-black transition duration-300
          bg-white fixed right-0"
          >
            <aside className="h-1/2 m-1 bg-white">
              <div
              onClick={hiddenPokemon}
                className="fa-regular fa-circle-xmark absolute left-3 top-3 
            w-6 h-6 rounded-full 
            bg-b text-red-400
            flex items-center justify-center"
              ></div>
              <img className="m-auto " src={pokemonImage.image} alt={pokemon.name} />
              <div
              onClick={handleShiny}
                className="
            fa-solid fa-star 
            absolute right-3 top-3 
            w-6 h-6 rounded-full 
            bg-yellow-400 text-orange-400
            flex items-center justify-center
            "
              ></div>
              <p className="text-center text-xs">N° {pokemon.id}</p>
              <p className="text-center">Descripcion:</p>
              <p className="text-center p-2 m-2 bg-b rounded">
                {pokemon.entry}
              </p>
              <div className="flex justify-around">
                <p>Altura</p>
                <p>Peso</p>
              </div>
              <div className="flex justify-around">
                <p className="bg-b w-1/4 text-center rounded">
                  {pokemon.height}
                </p>
                <p className="bg-b w-1/4 text-center rounded">
                  {pokemon.weight}
                </p>
              </div>
              <p className="text-center my-2">Tipos:</p>
              <div className="flex justify-around">
                {pokemon.types?.map((type, i) => {
                  return (
                    <p
                      key={i}
                      className={
                        type.type.name + " w-1/3 rounded text-center mx-5"
                      }
                    >
                      {type.type.name}
                    </p>
                  );
                })}
              </div>
              <p className="text-center my-2">Abilidades:</p>
              <div className="flex justify-around">
                {pokemon.abilities?.map((ab, i) => {
                  return (
                    <p key={i} className="w-1/3 rounded mx-5 bg-b text-center">
                      {ab.ability.name}
                    </p>
                  );
                })}
              </div>
            </aside>
          </section>
        )}
      </div>
    </main>
  );
}
