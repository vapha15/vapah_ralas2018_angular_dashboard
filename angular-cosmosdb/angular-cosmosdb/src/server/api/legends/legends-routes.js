const express = require("express");
const routerLegends = express.Router();
const legendsService = require("./legends-routes.service");

routerLegends.get("/legends-chart", (req, res) => {
    legendsService.getLegends(req, res);

});

module.exports = routerLegends;
