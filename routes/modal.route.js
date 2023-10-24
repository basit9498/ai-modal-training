const express = require("express");
const { modelGetResult } = require("../controllers/modal.controller");

const modelRoute = express.Router();

modelRoute.post("/predict", modelGetResult);

module.exports = { modelRoute };
