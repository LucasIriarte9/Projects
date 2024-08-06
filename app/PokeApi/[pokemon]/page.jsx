"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const params = useParams();
  const { pokemon } = params;
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPoke = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      const listaPokemon = await response.json();
      setPokemonDetail(listaPokemon);
      setLoading(false);
    };
    getPoke();
  }, []);

  if (loading)
    return <h2 className="flex justify-center text-4xl mt-12">Loading....</h2>;

  return (
    <div>
      {pokemonDetail ? (
        <>
          <div className="flex flex-rows justify-center items-center gap-24 mt-24 mb-4">
            <img
              className="w-96 h-96"
              src={pokemonDetail.sprites.other.dream_world.front_default}
              alt={pokemonDetail.name}
            />
            <div className="flex flex-col">
              <h2 className="flex justify-center text-5xl mt-4 items-center text-pretty font-bold mb-4">
                {pokemonDetail.name}
              </h2>
              <p className="font-mono text-2xl flex justify-center">
                Peso: {pokemonDetail.weight} KG
              </p>
              <p className="font-mono text-2xl flex justify-center">
                Altura: {pokemonDetail.height} Mts
              </p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Pokemon;
