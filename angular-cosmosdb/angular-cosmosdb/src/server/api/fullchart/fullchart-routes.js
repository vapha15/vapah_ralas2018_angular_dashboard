const express = require("express");
const routerFullchart = express.Router();
const fullchartService = require("./fullchart-routes.service");

routerFullchart.get("/full-chart", (req, res) => {
    fullchartService.getFullchart(req, res);

});

module.exports = routerFullchart;
