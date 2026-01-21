import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SeatSelection from "./pages/SeatSelection";
import PassengerDetails from "./pages/PassengerDetails";
import Confirmation from "./pages/Confirmation";
import MealSelection from "./pages/MealSelection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seats" element={<SeatSelection />} />
        <Route path="/passenger" element={<PassengerDetails />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/meals" element={<MealSelection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
