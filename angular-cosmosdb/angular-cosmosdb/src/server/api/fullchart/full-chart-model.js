const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fullchartSchema = new Schema(
  {

  },
  {
    collection: 'Fullchart'
  }
);

const Fullchart = mongoose.model('Fullchart', fullchartSchema);

module.exports = Fullchart;