const express = require('express');
const { getInsights } = require('/Users/vinayakpawar/Desktop/Work/Job_Projects/FinLLM Project/Server/controllers/financecontroller.js');

const router = express.Router();

router.post('/insights', getInsights);

module.exports = router;
