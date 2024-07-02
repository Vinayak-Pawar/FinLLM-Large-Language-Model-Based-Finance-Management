const axios = require('axios');

const getFinancialInsights = async (query) => {
  try {
    const response = await axios.post('OLLAMA_API_ENDPOINT', {
      prompt: query,
      model: 'llama-3'
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OLLAMA_API_KEY}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching financial insights:', error);
    throw error;
  }
};

module.exports = { getFinancialInsights };
