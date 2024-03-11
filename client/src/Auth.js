

import React from 'react';
import Nav from './Nav/Nav';
import './Auth.css';

const Auth = () => {
  return (
    <div className='LoginContainer'>
      <Nav />
      <div className='DetailContainer'>
        <h1>Login</h1>
        <label>Username</label>
        <input type='text' />
   
        <label>Password</label>
        <input type='password' />
        <p className="forgot-password"><a href='#'>Forgot Password?</a></p>
        <button>Submit</button>
        <p className="noaccount"><a href='/signup'>Don't have an account? Create one</a></p>
      </div>
    </div>
  );
}

export default Auth;
