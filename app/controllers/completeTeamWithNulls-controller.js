/* eslint-disable require-jsdoc */
'use strict';
const {addSpritesToPokemonTeam, completeTeamWithNulls} = require('../uc');

async function execute(req, res) {
  const {alias} = req.params;
  const pokemonTeam = await addSpritesToPokemonTeam( alias );
  const trainerTeam = await completeTeamWithNulls( alias, pokemonTeam );
  res.status(200).json(trainerTeam);
}

module.exports = execute;
