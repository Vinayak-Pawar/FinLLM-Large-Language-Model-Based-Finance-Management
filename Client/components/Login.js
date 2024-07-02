import React from 'react';

const Login = () => {
  const handleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
