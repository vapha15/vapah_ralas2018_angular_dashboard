const Lines = require("./lines-chart-model");

function getLines(req, res) {
  const docquery = Lines.find({});
  docquery
    .exec()
    .then(coins => {
      res.status(200).json(coins);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

module.exports = {
 getLines,
};
