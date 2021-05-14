/* eslint-disable require-jsdoc */
'use strict';
const {updateTrainerTeam} = require('../uc');

async function execute(req, res) {
  try {
    const {alias} = req.params;
    const {body} = req;
    await updateTrainerTeam(alias, body);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({msg: 'Server error', err});
  }
}

module.exports = execute;
