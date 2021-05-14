/* eslint-disable require-jsdoc */
'use strict';
const {createTrainerIfNotExist} = require('../uc');

async function execute(req) {
  const {alias} = req.params;
  const resAlias = await createTrainerIfNotExist(alias);
  return resAlias;
}

module.exports = execute;
