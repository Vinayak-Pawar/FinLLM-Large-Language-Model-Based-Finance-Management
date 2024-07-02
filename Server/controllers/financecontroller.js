const { getFinancialInsights } = require('../services/llamaService');

const getInsights = async (req, res) => {
  const { query } = req.body;

  try {
    const insights = await getFinancialInsights(query);
    res.json(insights);
  } catch (error) {
    res.status(500).send('Error fetching financial insights');
  }
};

module.exports = { getInsights };
