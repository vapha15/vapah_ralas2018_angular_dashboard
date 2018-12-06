const Fullchart = require("./full-chart-model");

function getFullchart(req, res) {
  const docquery = Fullchart.find({});
  docquery
    .exec()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

module.exports = {
 getFullchart,
};
