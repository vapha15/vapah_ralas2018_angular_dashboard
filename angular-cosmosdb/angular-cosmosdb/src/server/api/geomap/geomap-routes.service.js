const Geomap = require("./geomap-chart-model");

function getGeomap(req, res) {
  const docquery = Geomap.find({});
  docquery
    .exec()
    .then(maps => {
      res.status(200).json(maps);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

module.exports = {
 getGeomap,
};
