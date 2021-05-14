/* eslint-disable require-jsdoc */
'use strict';

const {sendRequest} = require('./client/poke-client');
const {POKE_URL} = require('../../config/config');

async function getPokemons(limit, offset) {
  const url = `${POKE_URL}pokemon/?limit=${limit}&offset=${offset}`;
  const response = await sendRequest('get', url);
  return response;
}

async function getPokemon(id) {
  const url = `${POKE_URL}pokemon/${id}`;
  const response = await sendRequest('get', url);
  return response;
}

module.exports = {
  getPokemons,
  getPokemon,
};
