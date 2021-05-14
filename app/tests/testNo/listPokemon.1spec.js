const server = require('../../../apptest');

const supertest = require('supertest');
const axios = require('axios');

test('GET /pokemons', async () => {
  const pokemon = {id: 1, name: 'bulbasaur'};
  let spritePokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`
  const id = pokemon.id-1; 

  await axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        expect(response.data.results[id].url).toBe(spritePokemon);
        expect(response.data.results[id].name).toBe(pokemon.name);
      });
});

test('supertest', async () => {
  const pokemon = {id: 1, name: 'bulbasaur'};
  const pokeArray = [{id: 1, name: 'bulbasaur'},{id: 2, name: 'ditto'}];
  let sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
  const position = pokemon.id-1; 

  await supertest(server.app).get('/pokemons')
      .then((response) => {
        expect(response.body[position].id).toBe(pokemon.id);
        expect(response.body[position].sprite).toBe(sprite);
        expect(response.body[position].name).toBe(pokemon.name);
        expect([{id: 1, name: 'bulbasaur'},{id: 2, name: 'ditto'}]).toEqual(expect.arrayContaining(pokeArray));
      });
});

