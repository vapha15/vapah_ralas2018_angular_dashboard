const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const geomapSchema = new Schema(
  {

  },
  {
    collection: 'Geomap'
  }
);

const Geomap = mongoose.model('Geomap', geomapSchema);

module.exports = Geomap;