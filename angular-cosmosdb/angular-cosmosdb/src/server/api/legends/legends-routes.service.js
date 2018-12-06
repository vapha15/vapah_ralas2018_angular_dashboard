const Legends = require("./legends-chart-model");

function getLegends(req, res) {
  const docquery = Legends.find({});
  docquery
    .exec()
    .then(data => {
      res.status(200).json(data);
      console.log("")
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

module.exports = {
 getLegends,
};
