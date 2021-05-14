/* eslint-disable require-jsdoc */
'use strict';
const {getPokemons, getPokemon} = require('../repositories/poke-repository');

async function execute(limit, offset) {
  const res = await getPokemons(limit, offset);
  const pokemons = res.data.results;
  const pokemonsResponse = await Promise.all(
      pokemons.map(async (pokemon) => {
        const pokemonData = await getPokemon(
            pokemon.url
                .replace('https://pokeapi.co/api/v2/pokemon/', '')
                .replace('/', ''),
        );
        const object = {
          'id': pokemonData.data.id,
          'name': pokemonData.data.name,
          'sprite': pokemonData.data.sprites.front_default,
        };
        return object;
      }),
  );
  return pokemonsResponse;
}

module.exports = execute;
