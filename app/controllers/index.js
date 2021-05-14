/* eslint-disable max-len */
'use strict';
const getPokemonsController = require('./get-pokemons-controller');
const getPokemonController = require('./get-pokemon-controller');
const createTrainerIfNotExistController = require('./createTrainerIfNotExist-controller');
const addSpritesToPokemonTeamController = require('./addSpritesToPokemonTeam-controller');
const completeTeamWithNullsController = require('./completeTeamWithNulls-controller');
const findTrainerTeamController = require('./findTrainerTeam-controller');
const updateTrainerTeamController = require('./updateTrainerTeam-controller');

module.exports = {
  getPokemonsController,
  getPokemonController,
  createTrainerIfNotExistController,
  addSpritesToPokemonTeamController,
  completeTeamWithNullsController,
  findTrainerTeamController,
  updateTrainerTeamController,
};
