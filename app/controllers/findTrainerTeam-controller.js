/* eslint-disable require-jsdoc */
'use strict';
const {addSpritesToPokemonTeam, completeTeamWithNulls,
  createTrainerIfNotExist} = require('../uc');

async function execute(req, res) {
  try {
    //get(`/trainer/${alias}/team`)
    const {alias} = req.params;
    await createTrainerIfNotExist(alias);
    const pokemonTeam = await addSpritesToPokemonTeam(alias);
    const trainerTeam = await completeTeamWithNulls(alias, pokemonTeam);
    res.status(200).json(trainerTeam);
  } catch (err) {
    res.status(500).json({msg: 'Server error', err});
  }
}

module.exports = execute;
