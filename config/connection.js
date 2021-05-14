const mongoose = require('mongoose');
const config = require('./config.js');

const connection = config.db;
const options = {useNewUrlParser: true,
  useCreateIndex: true, useUnifiedTopology: true};

const connectDb = () => {
  return mongoose.connect(connection, options);
};

module.exports = connectDb;
