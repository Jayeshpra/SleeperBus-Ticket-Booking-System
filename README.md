# 🚌 Sleeper Bus Ticket Booking System

A full-stack web application that simulates a **real-world sleeper bus booking platform** similar to RedBus.
Users can select seats, enter passenger details, optionally add meals, and complete ticket bookings with **live reserved seat blocking**.

This project is built for **learning full-stack development + REST API integration** using modern technologies.

---

## 🚀 Tech Stack

### Frontend

* React.js
* External CSS
* Axios
* React Router DOM

### Backend

* Django
* Django REST Framework
* PostgreSQL

---

## 🎯 Defined Features

### 1.Home Page

* Route display (Ahmedabad ➝ Mumbai)
* Night sleeper bus introduction
* Smooth UI with booking CTA button

---

### 2.Seat Selection System

* Lower Deck + Upper Deck layout
* 36 Sleeper seats (3 Columns × 6 Rows × 2 Decks)
* Drop-point selection
* Real-time reserved seat blocking
* Disabled seat selection for booked seats
* Visual seat states:

  * Available
  * Selected
  * Reserved

---

### 3.Passenger Details Page

* Collects:

  * Name
  * Age
  * Gender
  * Mobile Number
  * Email Address
* Displays booking summary
* Two checkout flows:

  * Checkout Without Meal
  * Add Meal Option

---

### 4.Meal Booking System

* Food menu with images
* Quantity increment & decrement
* Dynamic meal total calculation
* Combined ticket + meal price summary

---

### 5.Booking Confirmation

* Displays:

  * Booking ID
  * Seat number
  * Deck type
  * Passenger info
  * Meal summary
  * Grand total
* Payment gateway disabled (Demo Mode)

---

### 6.Backend API Features

* Create booking API
* Fetch reserved seats API
* PostgreSQL data storage
* Automatic booking ID generation
* REST-based frontend-backend integration

---

## 🧪 Test Cases

### Seat Booking Tests

| Scenario              | Expected Result                    |
| --------------------- | ---------------------------------- |
| Already reserved seat | Seat is disabled and not clickable |
| Available seat        | User can select                    |
| Deck switching        | Seat data updates correctly        |

---

### Passenger Form Validation

| Input        | Expected Result         |
| ------------ | ----------------------- |
| Empty fields | Form submission blocked |
| Valid input  | Moves to next page      |

---

### Meal Booking Tests

| Action            | Expected Output           |
| ----------------- | ------------------------- |
| Increase quantity | Total updates dynamically |
| Remove item       | Price recalculates        |
| Proceed checkout  | Booking saved to DB       |

---

### Backend API Tests

| API                  | Status       |
| -------------------- | ------------ |
| Create Booking       | 201 Created  |
| Invalid Data         | 400 Error    |
| Reserved Seats Fetch | Returns JSON |

---

## 🔗 Prototype Flow (App Navigation)

```
Home Page
   ↓
Seat Selection
   ↓
Passenger Details
   ↓
Meal Selection (Optional)
   ↓
Final Confirmation Page
```

---

## 📌 Demo Assumptions

* Only one bus available per day
* Single route: Ahmedabad ➝ Mumbai with multiple drop-points
* Payment gateway disabled
* Project built for academic/demo purpose

---

## ⚙️ How To Run Locally

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🗃 Database Used

* PostgreSQL
* Stores:

  * Passenger details: (Name, Age, Gender, Mobile Number, Email Address) 
  * Seat & deck info: (Seat Number, Deck Type)
  * Meal orders: (Selected Meal, Quantity of Each Meal, Prices of Each Meal, Total Meal Price)  
  * Pricing data: (Ticket Price + Meal Price)
  * Booking timestamp: (Time of Booking)

---

## 📈 Future Improvements

* Online payment gateway integration
* Live seat locking timer
* Multiple bus support
* Admin dashboard
* Mobile responsive UI
* Email ticket confirmation

---

## 👨‍💻 Developed By

**Jayesh Prajapati**

---

## Demo Video Links

**Frontend:** https://drive.google.com/file/d/1MZv4iSnq064l1pqkLyu_jysK9sdogTvf/view?usp=drive_link

**Backend:** https://drive.google.com/file/d/1phRuFjbIP1murhxWXdcP--RIqQl32AZc/view?usp=drive_link
