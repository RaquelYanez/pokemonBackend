/* eslint-disable require-jsdoc */
'use strict';
const {getPokemon} = require('../repositories/poke-repository');

async function execute(id) {
  const pokemonData = await getPokemon(id);
  console.log(pokemonData)
  const object = {
    id: pokemonData.data.id,
    name: pokemonData.data.name,
    sprite: pokemonData.data.sprites.front_default,
    // stats: pokemonData.data.stats,
    stats: {
      'hp': pokemonData.data.stats[0].base_stat,
      'attack': pokemonData.data.stats[1].base_stat,
      'defense': pokemonData.data.stats[2].base_stat,
      'special-attack': pokemonData.data.stats[3].base_stat,
      'special-defense': pokemonData.data.stats[4].base_stat,
      'speed': pokemonData.data.stats[5].base_stat,
    },
  };
  return object;
}

module.exports = execute;
