/* eslint-disable require-jsdoc */
'use strict';
const {getPokemons} = require('../uc');

async function execute(context, req) {
  const {limit, offset} = req.query;
  const res = await getPokemons(limit, offset);
  return res;
}

module.exports = execute;
