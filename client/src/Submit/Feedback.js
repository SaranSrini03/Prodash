import React, { useState } from 'react';
import './Feedback.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='container2'>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type='text' name='name' value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input type='text' name='email' value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Contact Number
          <input type='text' name='contactNumber' value={formData.contactNumber} onChange={handleChange} />
        </label>
        <label>
          Message
          <input type='text' name='message' value={formData.message} onChange={handleChange} />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
