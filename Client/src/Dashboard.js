import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [query, setQuery] = useState('');
  const [insights, setInsights] = useState('');

  const handleQuery = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/finance/insights', { query });
      setInsights(response.data);
    } catch (error) {
      console.error('Error fetching financial insights:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ask a financial question" />
      <button onClick={handleQuery}>Get Insights</button>
      <pre>{JSON.stringify(insights, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;
