import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Home = () => {
  return (
    <div>
      <h1>Welcome to FinLLM</h1>
      <Login />
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default Home;
