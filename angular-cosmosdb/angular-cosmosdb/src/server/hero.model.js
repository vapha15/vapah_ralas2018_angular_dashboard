const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const heroSchema = new Schema(
  {
    name: String,
    saying: String
  },
  {
    collection: 'Buildings'
  }
);

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;