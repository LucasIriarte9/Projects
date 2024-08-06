"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [pokemones, setPokemones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemones = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"
      );
      const listaPokemones = await response.json();
      const { results } = listaPokemones;

      const newPokemones = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();
        console.log(poke);
        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default,
        };
      });
      setPokemones(await Promise.all(newPokemones));
      setLoading(false);
    };
    getPokemones();
  }, []);
  if (loading)
    return <h2 className="flex justify-center text-4xl mt-12">Loading....</h2>;
  return (
    <>
      <h1 className="text-center text-3xl my-4 font-bold">PokeApi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 p-4 mx-auto gap-10">
        {pokemones.map((pokemon) => {
          return (
            <div className="mx-auto" key={pokemon.id}>
              <Link href={`/PokeApi/${pokemon.id}`}>
                <img
                  src={pokemon.img}
                  alt={pokemon.name}
                  className="w-96 h-96 "
                />
              </Link>

              <p className="font-bold text-2xl flex justify-center mt-4 ">
                {pokemon.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Login;
