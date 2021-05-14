/* eslint-disable require-jsdoc */
'use strict';
const Trainers = require('../entities/trainers');
// const resAlias = require("./createTrainerIfNotExist-uc");

async function execute(alias) {
  const resAlias = await Trainers.findOne({alias});
  const pokemonTeam = await Promise.all(
      resAlias.team.map((element) => {
        const sprite = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${element.id}.png`);
        const pokemon = {
          pokemon: {
            id: element.id,
            name: element.name,
            sprite: sprite,
          },
        };
        return pokemon;
      }),
  );
  return pokemonTeam;
}

module.exports = execute;
