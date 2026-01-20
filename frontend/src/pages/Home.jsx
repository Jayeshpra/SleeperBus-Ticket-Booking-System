import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="main-wrapper">
        {/* Navbar */}
        <div className="navbar">
          <h1 className="logo">
            <div className="logo-image"></div>
            <div>ScaleTech Travels</div>
          </h1>

          <button
            onClick={() => navigate("/seats")}
            className="book-btn"
          >
            Book Now
          </button>
        </div>

        {/* Hero Section */}
        <div className="hero-section">

          {/* Left Content */}
          <div className="hero-text">

            <h2>
              Overnight Sleeper Bus
              <span> Ahmedabad ➝ Mumbai</span>
            </h2>

            <p>
              Travel comfortably overnight with our premium AC sleeper buses.
              Enjoy smooth rides, safe journeys and peaceful sleep.
            </p>

            <div className="hero-buttons">

              <button
                onClick={() => navigate("/seats")}
                className="primary-btn"
              >
                Book Your Seat
              </button>

            </div>

          </div>

          {/* Right Info Card */}
          <div className="info-card">

            <h3>Bus Details </h3>

            <div className="info-list">
              <p>Departure: 09:00 PM</p>
              <p>Arrival: 07:00 AM</p>
              <p>Bus Type: AC Sleeper</p>
              <p>Route: Ahmedabad → Mumbai</p>
            </div>

          </div>

        </div>

        <div className="features-section">

          <div className="feature-box">
            <h4>Comfortable Sleep</h4>
            <p>Enjoy spacious, soft sleeper beds designed for maximum comfort, allowing you
              to stretch out fully and get uninterrupted, restful sleep throughout your
              overnight journey.</p>
          </div>

          <div className="feature-box">
            <h4>AC Environment</h4>
            <p>Travel in a perfectly climate-controlled environment that maintains an ideal
              temperature, keeping you cool, fresh, and relaxed no matter the weather outside.</p>
          </div>

          <div className="feature-box">
            <h4>Safe Journey</h4>
            <p>Experience a secure ride with trained professional drivers, GPS tracking, and
              strict night safety protocols to ensure you reach your destination safely and on time.</p>
          </div>

        </div>
        <div className="copyright">
          <p>Copyright © 2026 ScaleTech Travels. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
