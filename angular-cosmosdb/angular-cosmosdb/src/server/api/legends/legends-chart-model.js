const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const legendsSchema = new Schema(
  {

  },
  {
    collection: 'Legends'
  }
);

const Legends = mongoose.model('Legends', legendsSchema);

module.exports = Legends;