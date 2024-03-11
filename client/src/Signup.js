import React, { useState } from 'react';

const Signup = () => {
  return (
    <div className='SignupContainer'>
      <Nav />
      <div className='DetailContainer'>
        <h1>Signup</h1>
        <form>
          <label>Username</label>
          <input type='text' />

          <label>Email</label>
          <input type='email' />

          <label>Password</label>
          <input type='password'/>

          
          <button type="submit">Submit</button>
        </form>
        <p className="noaccount"><a href='/login'>Already have an account? Login here</a></p>
      </div>
    </div>
  );
};
export default Signup;
