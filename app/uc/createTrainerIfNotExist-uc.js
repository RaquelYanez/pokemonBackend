/* eslint-disable require-jsdoc */
'use strict';
const Trainers = require('../entities/trainers');

async function execute(alias) {
  const resAlias = await Trainers.findOne({alias});
  if (resAlias === null) {
    await Trainers.create({alias, team: []});
  }
  return resAlias;
}

module.exports = execute;
