"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const params = useParams();
  let { pokemon } = params;
  const [pokeId, setPokeId] = useState(Number(pokemon));
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleAnterior = () => {
    pokeId > 1 && setPokeId(pokeId - 1);
  };
  const handleSiguiente = () => {
    setPokeId(pokeId + 1);
  };

  useEffect(() => {
    const getPoke = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeId}`
      );
      const listaPokemon = await response.json();
      setPokemonDetail(listaPokemon);
      setLoading(false);
    };
    getPoke();
  }, [pokeId]);

  if (loading)
    return <h2 className="flex justify-center text-4xl mt-12">Loading....</h2>;

  return (
    <div>
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
        <div className="flex flex-row items-center justify-center gap-12">
          {pokeId > 1 ? (
            <button
              onClick={handleAnterior}
              className=" flex flex-row text-3xl mt-3 hover:bg-black hover:text-white rounded p-3"
            >
              Anterior
            </button>
          ) : (
            <button
              disabled
              onClick={handleAnterior}
              className=" flex flex-row text-3xl mt-3 hover:text-slate-600 rounded p-3"
            >
              Anterior
            </button>
          )}

          <button
            onClick={handleSiguiente}
            className=" flex flex-row text-3xl mt-3 hover:bg-black hover:text-white rounded p-3"
          >
            Siguiente
          </button>
        </div>
      </>
    </div>
  );
};

export default Pokemon;
