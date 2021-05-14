/* eslint-disable max-len */
const {Router} = require('express');
// eslint-disable-next-line new-cap
const router = Router();
const {getPokemonsController, getPokemonController,
  findTrainerTeamController, updateTrainerTeamController} = require('../controllers');
// const express = require('express');
// const router = express.Router();


router.get('/trainers/:alias/team', findTrainerTeamController);
router.put('/trainers/:alias/team', updateTrainerTeamController);
/*
Write in the body the array of team
{
[
{"id": 10, "name": "mauricio"},
{"id": 10, "name": "mauricio"}
]
}
*/
router.get('/pokemon', async function(req, res) {
  const pokemon = await getPokemonController(res, req);
  res.send(pokemon);
});

router.get('/pokemons', async function(req, res) {
  const pokemons = await getPokemonsController(res, req);
  res.send(pokemons);
});

module.exports = router;
