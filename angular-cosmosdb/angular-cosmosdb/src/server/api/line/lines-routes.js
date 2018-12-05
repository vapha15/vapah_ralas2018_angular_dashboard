const express = require("express");
const routerLines = express.Router();
const linesService = require("./lines-routes.service");

routerLines.get("/line-chart", (req, res) => {
    linesService.getLines(req, res);

});

module.exports = routerLines;
