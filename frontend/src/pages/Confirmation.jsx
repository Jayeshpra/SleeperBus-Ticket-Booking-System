import { useLocation, useNavigate } from "react-router-dom";
import "./Confirmation.css";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve data passed from previous pages
  const {
    passengerName = "Traveler",
    age = "--",
    gender = "--",
    seat = "N/A",
    deck = "",
    destination = "Mumbai",
    price = 0, // Ticket Price
    arrival = "--:--",
    mealItems = [],
    mealTotal = 0,
    grandTotal = price // Default to ticket price if no meals
  } = location.state || {};

  // Generate a random Ticket ID for realism
  const ticketId = "STT" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="confirm-page">

      <div className="confirm-navbar">
        <h1 className="confirm-logo">
          <div className="confirm-logo-image"></div>
          <div>ScaleTech Travels</div>
        </h1>
      </div>

      <div className="confirm-card">

        {/* Success Header */}
        <div className="confirm-header">
          <div className="check-icon">✓</div>
          <h1>Booking Confirmed!</h1>
          <p>Your ticket has been successfully booked.</p>
        </div>

        {/* Ticket Details Container */}
        <div className="ticket-details">

          <div className="ticket-row">
            <span className="label">Ticket ID</span>
            <span className="value bold">{ticketId}</span>
          </div>

          <div className="divider"></div>

          {/* Route Info */}
          <div className="route-info">
            <div className="city">
              <span className="city-name">Ahmedabad</span>
              <span className="city-time">09:00 PM</span>
            </div>
            <div className="arrow">➝</div>
            <div className="city">
              <span className="city-name">{destination}</span>
              <span className="city-time">{arrival}</span>
            </div>
          </div>

          <div className="divider"></div>

          {/* Passenger and Seat Info */}
          <div className="info-grid">
            <div className="info-item">
              <span className="label">Passenger</span>
              <span className="value">{passengerName}</span>
            </div>
            <div className="info-item">
              <span className="label">Seat</span>
              <span className="value">{seat} ({deck})</span>
            </div>
            <div className="info-item">
              <span className="label">Age/Gender</span>
              <span className="value">{age} / {gender}</span>
            </div>
            <div className="info-item">
              <span className="label">Bus Type</span>
              <span className="value">AC Sleeper</span>
            </div>
          </div>

          {/* --- NEW SECTION: MEAL DETAILS --- */}
          {mealItems.length > 0 && (
            <>
              <div className="divider"></div>
              <div className="meal-info">
                <h4 style={{ color: "black", fontSize: "17px" }}>Meal Add-ons</h4>
                {mealItems.map((item, index) => (
                  <div key={index} className="ticket-row small-row">
                    <span className="label" style={{ color: "black", fontSize: "15px" }}>
                      {item.name} <small>x{item.qty}</small>
                    </span>
                    <span className="value">₹{item.totalItemPrice}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="divider"></div>

          {/* Payment Info */}
          <div className="price-breakdown">
            <div className="ticket-row">
              <span className="label" style={{ color: "black", fontSize: "16px" }}>Ticket Price</span>
              <span className="value">₹{price}</span>
            </div>
            {mealTotal > 0 && (
              <div className="ticket-row">
                <span className="label" style={{ color: "black", fontSize: "16px" }}>Meal Charges</span>
                <span className="value">₹{mealTotal}</span>
              </div>
            )}
          </div>

          <div className="divider"></div>

          <div className="ticket-row total-row">
            <span className="label" style={{ color: "black", fontSize: "18px" }}>Total Amount</span>
            <span className="value price">₹{grandTotal}</span>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="confirm-actions">
          <button className="btn-primary" onClick={() => window.print()}>
            Download Ticket
          </button>
          <button className="btn-secondary" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>

      </div>
    </div>
  );
}

export default Confirmation;