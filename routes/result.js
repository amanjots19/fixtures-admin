const path = require("path");

const express = require("express");

const leagueController = require("../controllers/league");

const router = express.Router();

router.get('/result', leagueController.getTable);

module.exports = router;