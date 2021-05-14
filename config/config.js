module.exports ={
  port: process.env.PORT || 8000,
  db: process.env.MONGO_DB || 'mongodb://localhost:27017/pokemon',
  POKE_URL: process.env.POKE_URL || 'https://pokeapi.co/api/v2/',
};
