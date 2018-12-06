const express = require("express");
const routerGeomap = express.Router();
const geomapService = require("./geomap-routes.service");

routerGeomap.get("/geomap-chart", (req, res) => {
    geomapService.getGeomap(req, res);

});

module.exports = routerGeomap;
