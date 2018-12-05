const express = require("express");
const routerRevenues = express.Router();
const revenueService = require("./revenue-routes.service");

routerRevenues.get("/revenue-chart", (req, res) => {
    revenueService.getRevenues(req, res);

});

module.exports = routerRevenues;
