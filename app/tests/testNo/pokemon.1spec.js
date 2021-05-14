const server = require('../../../apptest');
const supertest = require('supertest');

test('supertest de un pokemon', async () => {
  
    let pokemon = {id: 1, name: 'bulbasaur', sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`};
  
    await supertest(server.app).get(`/pokemon?id=${pokemon.id}`)
        .then((response) => {
          expect(response.body.id).toBe(pokemon.id);
          expect(response.body.sprite).toBe(pokemon.sprite);
          expect(response.body.name).toBe(pokemon.name);
        });
  });
  
  test('supertest stats', async () => {
    let pokemonId = 1
    let stat = 'special-defense'
    //stats:[{'defense': 49,'special-attack': 65}]}  speed": 45
    await supertest(server.app).get(`/pokemon?id=${pokemonId}`)
    .then((response) => {
        expect(response.body.stats.defense).toBe(49);
        expect(response.body.stats.speed).toBe(45);
      });
  });
