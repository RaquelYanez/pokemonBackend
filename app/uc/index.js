'use strict';
const getPokemons = require('./get-pokemons-uc');
const getPokemon = require('./get-pokemon-uc');
const createTrainerIfNotExist = require('./createTrainerIfNotExist-uc');
const addSpritesToPokemonTeam = require('./addSpritesToPokemonTeam-uc');
const completeTeamWithNulls = require('./completeTeamWithNulls-uc');
const updateTrainerTeam = require('./updateTrainerTeam-uc');

module.exports = {
  getPokemons,
  getPokemon,
  createTrainerIfNotExist,
  addSpritesToPokemonTeam,
  completeTeamWithNulls,
  updateTrainerTeam,
};
