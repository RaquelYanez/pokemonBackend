/* eslint-disable require-jsdoc */
'use strict';
const {getPokemon} = require('../uc');

async function execute(context, req) {
  const {id} = req.query;
  const res = await getPokemon(id);
  return res;
}

module.exports = execute;
