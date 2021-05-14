/* eslint-disable require-jsdoc */
'use strict';

const axios = require('axios');

async function sendRequest(method, url, headers, body, queryParams) {
  try {
    const instance = axios.create();
    const response = await instance.request({
      method,
      url,
      timeout: 1000,
      headers: {...headers},
      params: {...queryParams},
      data: body,
    });

    return {
      status: response.status,
      headers: response.headers,
      data: response.data,
    };
  } catch (error) {
    console.log('ERROR in sendRequest: ', error);
  }
}

module.exports = {
  sendRequest,
};
