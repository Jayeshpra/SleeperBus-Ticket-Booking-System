import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MealSelection.css";
import vegthali from "../assets/veg_thali.webp";
import sandwich from "../assets/paneer_sandwich.webp";
import dosa from "../assets/masala_dosa.webp";
import manchurian from "../assets/manchurian.webp";
import burger from "../assets/burger.webp";
import pizza from "../assets/pizza.jpg";
import icecream from "../assets/ice_cream.webp";
import water from "../assets/mineral_water.webp";
import tea from "../assets/tea.webp";
import coffee from "../assets/cold_coffee.webp";
import axios from "axios";

function MealSelection() {

    const location = useLocation();
    const navigate = useNavigate();

    const bookingData = location.state || {};

    const menuItems = [
        { id: 1, name: "Veg Thali", price: 200, img: vegthali },
        { id: 2, name: "Paneer Sandwich", price: 80, img: sandwich },
        { id: 3, name: "Masala Dosa", price: 150, img: dosa },
        { id: 4, name: "Dry Manchurian", price: 120, img: manchurian },
        { id: 5, name: "Burger", price: 100, img: burger },
        { id: 6, name: "Pizza", price: 180, img: pizza },
        { id: 7, name: "Ice Cream", price: 60, img: icecream },
        { id: 8, name: "Mineral Water", price: 20, img: water },
        { id: 9, name: "Tea", price: 20, img: tea },
        { id: 10, name: "Cold Coffee", price: 70, img: coffee },
    ];


    const [cart, setCart] = useState({});

    const updateQuantity = (itemId, change) => {
        setCart(prev => {
            const currentQty = prev[itemId] || 0;
            const newQty = Math.max(0, currentQty + change);
            return { ...prev, [itemId]: newQty };
        });
    };

    const calculateTotal = () => {
        return Object.entries(cart).reduce((total, [id, qty]) => {
            const item = menuItems.find(i => i.id === parseInt(id));
            return total + (item.price * qty);
        }, 0);
    };

    const handleProceed = async () => {

        const selectedMeals = Object.entries(cart)
            .filter(([_, qty]) => qty > 0)
            .map(([id, qty]) => {
                const item = menuItems.find(i => i.id === parseInt(id));
                return {
                    ...item,
                    qty,
                    totalItemPrice: item.price * qty
                };
            });

        const mealTotalPrice = calculateTotal();
        const mealNames = selectedMeals.map(item => item.name).join(", ");
        const mealQtys = selectedMeals.map(item => item.qty).join(", ");
        const mealPrices = selectedMeals.map(item => item.totalItemPrice).join(", ");

        const apiPayload = {
            // Ensure we fallback to empty strings or 0 if data is missing
            passenger_name: bookingData.passengerName || "",
            age: bookingData.age || 0,
            gender: bookingData.gender || "Male",
            mobile_number: bookingData.mobile || "",
            email_address: bookingData.emailaddress || "",
            seat_number: bookingData.seat || "",
            deck: bookingData.deck || "",
            drop_point: bookingData.destination || "",

            // Check if your backend expects 'price' or 'ticket_price'
            ticket_price: Number(bookingData.price) || 0,  // Convert to Number!

            meal_name: mealNames,
            meal_quantity: mealQtys,
            meal_price: mealPrices,

            total_meal_price: mealTotalPrice,

            // Fix: Ensure we are adding numbers, not strings
            grand_total_amount: (Number(bookingData.price) || 0) + mealTotalPrice,
        };

        try {

            const response = await axios.post(
                "https://sleeperbus-ticket-booking-system.onrender.com/api/create-booking/",
                apiPayload
            );

            console.log("Booking Success:", response.data);

            navigate("/confirmation", {
                state: {
                    ...bookingData,
                    mealItems: selectedMeals,
                    mealTotal: mealTotalPrice,
                    grandTotal: (bookingData.price || 0) + mealTotalPrice,
                    bookingId: response.data.booking_id
                }
            });
        } catch (error) {
            console.error("Booking failed:", error);
            alert("Booking failed! Please Enter Passenger details.");
        }
    };

    return (
        <div className="menu-container">

            <div className="passenger-navbar">
                <h1 className="passenger-logo">
                    <div className="passenger-logo-image"></div>
                    <div>ScaleTech Travels</div>
                </h1>
            </div>

            <div className="menu">

                <div className="passenger-header">
                    <h1>Select Your Meal</h1>
                    <p>Fresh meals delivered to your seat</p>
                </div>

                <div className="passenger-content">

                    {/* Meal Grid */}
                    <div className="meal-grid">
                        {menuItems.map(item => (
                            <div key={item.id} className="meal-card">

                                <img src={item.img} alt={item.name} />

                                <h3>{item.name}</h3>
                                <p className="meal-price">₹{item.price}</p>

                                <div className="qty-controls">
                                    <button
                                        className="qty-btn"
                                        onClick={() => updateQuantity(item.id, -1)}
                                    >-</button>

                                    <span className="qty-value">{cart[item.id] || 0}</span>

                                    <button
                                        className="qty-btn add"
                                        onClick={() => updateQuantity(item.id, 1)}
                                    >+</button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                {/* Summary */}
                <div className="meal-summary-card">

                    <h2>Order Summary</h2>

                    <div className="meal-summary-row">
                        <span>Ticket Amount</span>
                        <span style={{ color: "#22c55e", fontWeight: "500" }}>₹{bookingData.price}</span>
                    </div>

                    <div className="meal-summary-row">
                        <span>Meal Total Price</span>
                        <span style={{ color: "#22c55e", fontWeight: "500" }}>₹{calculateTotal()}</span>
                    </div>

                    <div className="divider"></div>

                    <div className="summary-row total">
                        <span>Grand Total</span>
                        <span style={{ color: "#22c55e", fontWeight: "500" }}>₹{bookingData.price + calculateTotal()}</span>
                    </div>

                    <button className="meal-confirm-btn" onClick={handleProceed}>
                        Go to Final Checkout
                    </button>

                </div>

            </div>
        </div>
    );
}

export default MealSelection;
