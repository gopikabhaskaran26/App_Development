// Enroll.js
import React from 'react';
import './Enroll.css';

const Enroll = () => {
  return (
    <div className="enrollSection">
      <div className="container">
        <h2>Enroll in a Course</h2>
        <form className="enrollForm">
          <div className="formGroup">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="formGroup">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="formGroup">
            <label>Course</label>
            <select>
              <option>Select a course</option>
              <option>Course 1</option>
              <option>Course 2</option>
            </select>
          </div>
          <div className="formGroup">
            <label>Payment Method</label>
            <select>
              <option>Select a payment method</option>
              <option>Credit Card</option>
              <option>PayPal</option>
            </select>
          </div>
          <button type="submit" className="enrollButton">Enroll Now</button>
        </form>
      </div>
    </div>
  );
};

export default Enroll;
