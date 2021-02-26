const path = require('path');

const express = require('express');

const leagueController= require('../controllers/league');

const router = express.Router();

router.get('/',leagueController.getLeague);
router.post('/',leagueController.postLeague);

module.exports = router;