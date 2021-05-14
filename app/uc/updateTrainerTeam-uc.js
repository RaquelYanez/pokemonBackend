/* eslint-disable require-jsdoc */
'use strict';
const Trainers = require('../entities/trainers');

async function execute(alias, body) {
  if (body.length <= 6) {
    const trainerTeamUpdated = await Trainers.updateOne(
        {alias},
        {$set: {'team': body}},
        {new: true, upsert: true});
    return trainerTeamUpdated;
  }
}

module.exports = execute;
