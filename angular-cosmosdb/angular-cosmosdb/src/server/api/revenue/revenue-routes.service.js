const Revenue = require("./revenue-chart-model");

function getRevenues(req, res) {
  const docquery = Revenue.find({});
  docquery
    .exec()
    .then(revenues => {
      res.status(200).json(revenues);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

module.exports = {
 getRevenues,
};
