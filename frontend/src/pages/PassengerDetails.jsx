import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PassengerDetails.css";

function PassengerDetails() {

  const location = useLocation();
  const navigate = useNavigate();

  const seatNumber = location.state?.seat;
  const deckType = location.state?.deck;


  return (
    <div className="passenger-container">

      <div className="passenger-navbar">
        <h1 className="passenger-logo">
          <div className="passenger-logo-image"></div>
          <div>ScaleTech Travels</div>
        </h1>
      </div>
      <div className="form">
        {/* Header */}
        <div className="passenger-header">
          <h1>Passenger Details</h1>
          <p>Ahmedabad ➝ Mumbai | Sleeper AC Bus</p>
        </div>

        {/* Main Content */}
        <div className="passenger-content">

          {/* Form Section */}
          <form className="form-card">
            <h2>Enter Passenger Information</h2>

            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="row">
              <div className="input-group">
                <label>Age</label>
                <input type="number" placeholder="Age" required />
              </div>

              <div className="input-group">
                <label>Gender</label>
                <select>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>Mobile Number</label>
              <input type="tel" placeholder="Enter mobile number" required />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter email" required />
            </div>

            <button className="confirm-btn" type="submit" onClick={() => navigate('/confirmation')}>
              Confirm Booking
            </button>
          </form>

          {/* Summary Section */}
          <div className="summary-card">
            <h2>Booking Summary</h2>

            <div className="summary-row">
              <span>Route</span>
              <span>Ahmedabad → Mumbai</span>
            </div>

            <div className="summary-row">
              <span>Seat</span>
              <span>{seatNumber} {deckType}</span>
            </div>

            <div className="summary-row">
              <span>Departure</span>
              <span>09:00 PM</span>
            </div>

            <div className="summary-row">
              <span>Arrival</span>
              <span>07:00 AM</span>
            </div>

            <div className="summary-row">
              <span>Fare</span>
              <span>₹900</span>
            </div>

            <div className="demo-note">
              ⚠ Demo Project — Payment Gateway Disabled
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default PassengerDetails;


