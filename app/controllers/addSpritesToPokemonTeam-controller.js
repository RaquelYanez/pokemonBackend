/* eslint-disable require-jsdoc */
'use strict';
const {createTrainerIfNotExist, addSpritesToPokemonTeam} = require('../uc');

async function execute(req, res) {
  const {alias} = req.params;
  await createTrainerIfNotExist(alias);
  const pokemonTeam = await addSpritesToPokemonTeam(alias);
  res.status(200).json(pokemonTeam);
}

module.exports = execute;
