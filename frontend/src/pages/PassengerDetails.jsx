import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PassengerDetails.css";
import axios from "axios";

function PassengerDetails() {

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const actionType = e.nativeEvent.submitter.value;

    const finalBookingData = {
      passengerName: formData.fullName,
      age: formData.age,
      gender: formData.gender,
      mobile: formData.mobile,
      emailaddress: formData.emailaddress,
      seat: seatNumber,
      deck: deckType,
      destination: destination,
      price: priceAmount,
      arrival: timeReached,
    };

    const apiPayload = {

      passenger_name: finalBookingData.passengerName,
      age: finalBookingData.age,
      gender: finalBookingData.gender,

      mobile_number: finalBookingData.mobile,
      email_address: finalBookingData.emailaddress,

      seat_number: finalBookingData.seat,
      deck: finalBookingData.deck,
      drop_point: finalBookingData.destination,

      ticket_price: Number(finalBookingData.price),

      meal_name: "no meal",
      meal_quantity: "0",
      meal_price: "0",

      total_meal_price: 0,
      grand_total_amount: Number(finalBookingData.price),
    };


    if (actionType === "checkout") {

      try {

        const response = await axios.post(
          "http://127.0.0.1:8000/api/create-booking/",
          apiPayload
        );
        navigate('/confirmation', {
          state: {
            ...finalBookingData,
            bookingId: response.data.bookingId
          }
        });

      } catch (error) {
        console.error(error);

        if (error.response?.data?.error) {
          alert(error.response.data.error);
        } else {
          alert("Booking failed!");
        }
      }

    }

    if (actionType === "meal") {
      navigate('/meals', { state: finalBookingData })
    }
  };

  const seatNumber = location.state?.seat;
  const deckType = location.state?.deck;
  const destination = location.state?.destination;
  const priceAmount = location.state?.price;
  const timeReached = location.state?.time;

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "Male",
    mobile: "",
    emailaddress: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="passenger-container">

      <div className="passenger-navbar">
        <h1 className="passenger-logo">
          <div className="passenger-logo-image"></div>
          <div>ScaleTech Travels</div>
        </h1>
      </div>
      <div className="form" >
        {/* Header */}
        <div className="passenger-header">
          <h1>Passenger Details</h1>
          <p>Ahmedabad ➝ Mumbai | Sleeper AC Bus</p>
        </div>

        {/* Main Content */}
        <div className="passenger-content">

          {/* Form Section */}
          <form className="form-card" onSubmit={handleSubmit} >
            <h2>Enter Passenger Information</h2>

            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="fullName" placeholder="Enter your name" required value={formData.fullName} onChange={handleChange} />
            </div>

            <div className="row">
              <div className="input-group">
                <label>Age</label>
                <input type="number" name="age" placeholder="Age" required value={formData.age} onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>Gender</label>
                <select name="gender" required value={formData.gender} onChange={handleChange}>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>Mobile Number</label>
              <input type="number" name="mobile" placeholder="Enter mobile number" required value={formData.mobile} onChange={handleChange} />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input type="email" name="emailaddress" placeholder="Enter email" required value={formData.emailaddress} onChange={handleChange} />
            </div>

            <button className="confirm-btn" type="submit" name="action" value="checkout">
              Checkout without Meal
            </button>
            <button className="mealbooking-btn" type="submit" name="action" value="meal">
              Add Meal
            </button>

          </form>

          {/* Summary Section */}
          <div className="summary-card">
            <h2>Booking Summary</h2>

            <div className="summary-row">
              <span>Route</span>
              <span>Ahmedabad → {destination}</span>
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
              <span>{timeReached}</span>
            </div>

            <div className="summary-row">
              <span>Price</span>
              <span>₹{priceAmount}</span>
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


