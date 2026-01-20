import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SeatSelection.css";

function SeatSelection() {

  const navigate = useNavigate();

  const [deck, setDeck] = useState("lower");
  const [selectedSeat, setSelectedSeat] = useState(null);

  // Generate seats dynamically
  const generateSeats = (prefix) => {
    let seats = [];
    for (let i = 1; i <= 18; i++) {
      seats.push(prefix + i);
    }
    return seats;
  };

  const lowerSeats = generateSeats("L");
  const upperSeats = generateSeats("U");

  const activeSeats = deck === "lower" ? lowerSeats : upperSeats;

  const handleSeatClick = (seatNumber) => {
    setSelectedSeat(seatNumber);
  };


  return (
    <div className="seat-page">

      <div className="seat-wrapper">

        <div className="seat-navbar">
          <h1 className="seat-logo">
            <div className="seat-logo-image"></div>
            <div>ScaleTech Travels</div>
          </h1>
        </div>

        {/* Header */}
        <div className="seat-header">
          <div className="details">
            <h2>Ahmedabad ➝ Mumbai</h2>
            <p>Departure: 09:00 PM | AC Sleeper</p>
          </div>
          <div className="deck-switch">

            <div className={`deck-slider ${deck === "upper" ? "move-right" : ""}`}></div>
            
            <button
              className={deck === "lower" ? "deck-btn active" : "deck-btn"}
              onClick={() => setDeck("lower")}
            >
              Lower Deck
            </button>

            <button
              className={deck === "upper" ? "deck-btn active" : "deck-btn"}
              onClick={() => setDeck("upper")}
            >
              Upper Deck
            </button>
          </div>

          {/* Deck Switch */}


        </div>

        {/* Main Content */}
        <div className="seat-content">

          {/* Seat Layout */}
          <div className="seat-layout">

            <h3>{deck === "lower" ? "Lower Deck" : "Upper Deck"} Seats</h3>

            <div className="sleeper-grid">

              {activeSeats.map((seat, index) => (

                <div
                  key={seat}
                  className={`sleeper-seat ${selectedSeat === seat ? "selected" : ""}`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat}
                </div>

              ))}

            </div>

          </div>

          {/* Info Panel */}
          <div className="seat-info">

            <h3>Booking Summary</h3>

            <div className="info-row">
              <span>Route</span>
              <span>Ahmedabad → Mumbai</span>
            </div>

            <div className="info-row">
              <span>Deck</span>
              <span>{deck.toUpperCase()}</span>
            </div>

            <div className="info-row">
              <span>Seat</span>
              <span>{selectedSeat || "Not Selected"}</span>
            </div>

            <div className="info-row">
              <span>Price</span>
              <span>₹900</span>
            </div>

            <button
              disabled={!selectedSeat}
              onClick={() => navigate("/passenger", {state: {seat: selectedSeat, deck: deck.toUpperCase()}})}
              className="continue-btn"
            >
              Continue
            </button>

          </div>
        </div>


      </div>

    </div>
  );
}

export default SeatSelection;
