/* eslint-disable require-jsdoc */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('../../config/config.js');
const routes = require('../routes/router');
const connectDb = require('../../config/connection');

class Server {
  constructor() {
    this.app = express();
    this.pokemonApiPath = '/';
    // conexion mongo
    connectDb().then(() => {
      console.log('MongoDb connected'),
      (err) => {
        console.log(err);
      };
    });

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(morgan('dev'));
  }

  routes() {
    // usamos un middleware para cargar las rutas
    this.app.use(this.pokemonApiPath, routes);
  }

  listen() {
    this.app.listen(config.port, () => console.log(`http://localhost:${config.port}`));
  }
  

}


module.exports = Server;
