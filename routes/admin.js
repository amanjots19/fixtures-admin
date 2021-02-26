const path = require('path');

const express = require('express');

const leagueController= require('../controllers/league');

const router = express.Router();

router.get('/fixtures',leagueController.getfixtures);

router.post('/fixtures',leagueController.postFixtures);

module.exports = router;