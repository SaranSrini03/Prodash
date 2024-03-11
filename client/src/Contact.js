import React from 'react';
import Nav from './Nav/Nav';
import Feedback from './Submit/Feedback';
import Detail from './Submit/Detail';
import Bottom from './Nav/Bottom';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className='contact-container'>
      <Nav />
      <div className='content-container'>
        <Detail />
        <Feedback />
      </div>
      <Bottom/>
    </div>
  );
};

export default Contact;
