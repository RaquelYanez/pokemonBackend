const server = require('../../apptest');
const supertest = require('supertest');
const mongoose = require("mongoose");
const Trainers = require('../entities/trainers');

beforeEach((done) => {
  mongoose.connect("mongodb://localhost:27017/pokemon",
    () => done());
});

afterEach((done) => {
    mongoose.connection.close(() => done())
});

test('when alias doesnt exist, then create it ', async () => {
    const alias = 'aliasTest';

    await supertest(server.app).get(`/trainers/${alias}/team`)
    .then((response) => { 
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(6);
      expect(response.body[0].position).toBe(0);
  });

  });  

test('when alias is null, then create it', async () => {
    const alias = 'aliasTest';


  });  