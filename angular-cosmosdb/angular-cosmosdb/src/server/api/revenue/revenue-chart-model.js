const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const revenuesSchema = new Schema(
  {

  },
  {
    collection: 'Revenue'
  }
);

const Revenue = mongoose.model('Revenue', revenuesSchema);

module.exports = Revenue;