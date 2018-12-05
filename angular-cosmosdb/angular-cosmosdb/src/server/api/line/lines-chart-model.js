const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coinsSchema = new Schema(
  {

  },
  {
    collection: 'Coins'
  }
);

const Coins = mongoose.model('Coins', coinsSchema);

module.exports = Coins;