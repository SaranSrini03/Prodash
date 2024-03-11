import React, { useState } from 'react';
import Nav from './Nav/Nav';  // Assuming Nav component exists

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();
      setMessage(data.message);

      setUsername('');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error(err);
      setMessage('Error creating user');
    }
  };

  return (
    <div className="SignupContainer">
      <Nav />
      <div className="DetailContainer">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
          {message && <p className="message">{message}</p>}
        </form>
        <p className="noaccount">
          <a href="/login">Already have an account? Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
