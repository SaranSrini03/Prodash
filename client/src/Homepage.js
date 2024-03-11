import React from 'react';
import './Homepage.css';
import Nav from './Nav/Nav.js';
import Calendar from './Main';
import Middle from './Middle';
import Right from './Right';

const Homepage = () => {
  return (
    <div className="homepage">
        <Nav />
        <div className="content-container">
          <Calendar />
          <Middle />
          <Right/>
        </div>
    </div>
  );
}

export default Homepage;
