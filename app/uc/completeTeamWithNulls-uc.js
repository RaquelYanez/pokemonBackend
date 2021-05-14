/* eslint-disable require-jsdoc */
'use strict';
const Trainers = require('../entities/trainers');
// const resAlias = require("./createTrainerIfNotExist-uc");
// const pokemonTeam = require('./addSpritesToPokemonTeam-uc');

async function execute(alias, pokemonTeam) {
  // const resAlias = await Trainers.findOne({alias});
  await Trainers.findOne({alias});
  while (pokemonTeam.length < 6) {
    pokemonTeam.push({pokemon: 'null'});
  }
  const trainerTeam = await Promise.all(
      pokemonTeam.map(async (element, index) => {
        const pokemon = {
          position: index,
          ...element,
        };
        return pokemon;
      }),
  );
  return trainerTeam;
}

module.exports = execute;
