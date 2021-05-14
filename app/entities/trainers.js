const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainerSchema = new Schema({

  alias: {type: String, unique: true, trim: true, required: true},
  team: [
    {id: {type: Number}, name: {type: String}},

  ],

});


module.exports = mongoose.model('Trainers', trainerSchema);
