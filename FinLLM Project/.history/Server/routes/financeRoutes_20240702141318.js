const express = require('express');
const { getInsights } = require('../controllers/financeController');

const router = express.Router();

router.post('/insights', getInsights);

module.exports = router;
