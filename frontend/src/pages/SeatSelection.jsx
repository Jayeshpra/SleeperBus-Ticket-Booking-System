import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SeatSelection.css";
import axios from "axios";

function SeatSelection() {

  const navigate = useNavigate();

  const destinationData = [
    { city: "Anand", price: 200, time: "10:45 PM" },
    { city: "Vadodara", price: 400, time: "11:30 PM" },
    { city: "Bharuch", price: 600, time: "01:00 AM" },
    { city: "Surat", price: 800, time: "02:30 AM" },
    { city: "Daman", price: 1000, time: "04:00 AM" },
    { city: "Mumbai", price: 1400, time: "07:00 AM" },
  ];

  const [deck, setDeck] = useState("lower");
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState("Mumbai");
  const [reservedSeats, setReservedSeats] = useState([]);

  useEffect(() => {
    axios.get('https://sleeperbus-ticket-booking-system.onrender.com/api/reserved-seats/')
      .then(res => {
        setReservedSeats(res.data);
      })
      .catch(err => {
        console.log("Error fetching reserved seats", err);
      });
  }, []);

  const isSeatReserved = (seat, deck) => {
    return reservedSeats.some(
      item => item.seat_number === seat.toUpperCase() && item.deck === deck.toUpperCase()
    );
  };

  const currentPrice = destinationData.find(
    (item) => item.city === selectedDestination
  )?.price || 0;

  const currentTime = destinationData.find(
    (item) => item.city === selectedDestination
  )?.time || "09:00 PM";

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

  const handleDestinationChange = (e) => {
    setSelectedDestination(e.target.value);
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
            <h2>Ahmedabad ➝ {selectedDestination}</h2>

            {/* --- 4. Add the Dropdown Menu --- */}
            <div className="destination-select-container">
              <label htmlFor="destination">Drop Point:</label>
              <select
                id="destination"
                value={selectedDestination}
                onChange={handleDestinationChange}
              >
                {destinationData.map((item) => (
                  <option key={item.city} value={item.city}>
                    {item.city}
                  </option>
                ))}
              </select>
            </div>

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
                  className={`sleeper-seat ${selectedSeat === seat ? "selected" : ""} ${isSeatReserved(seat, deck) ? "reserved" : ""}`}
                  onClick={() => {
                    if (!isSeatReserved(seat, deck)) {
                      handleSeatClick(seat);
                    }
                  }}
                >
                  {seat}
                </div>

              ))}

            </div>

          </div>
          <div>
            <div className="label-summary">
              <div className="seat-label" style={{ background: "#00000067" }}>Available Seats</div>
              <div className="seat-label" style={{ background: "#22c55e" }}>Selected Seat</div>
              <div className="seat-label" style={{ background: "red" }}>Reserved Seats</div>
            </div>
            {/* Info Panel */}
            <div className="seat-info">


              <h3>Booking Summary</h3>

              <div className="info-row">
                <span>Route</span>
                <span>Ahmedabad → {selectedDestination}</span>
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
                <span>₹{currentPrice}</span>
              </div>

              <button
                disabled={!selectedSeat}
                onClick={() =>
                  navigate("/passenger", {
                    state: {
                      seat: selectedSeat,
                      deck: deck.toUpperCase(),
                      destination: selectedDestination,
                      price: currentPrice,
                      time: currentTime
                    }
                  })
                }
                className="continue-btn"
              >
                Continue
              </button>

            </div>
          </div>
        </div>


      </div>

    </div>
  );
}

export default SeatSelection;
