import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SeatSelection from "./pages/SeatSelection";
import PassengerDetails from "./pages/PassengerDetails";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seats" element={<SeatSelection />} />
        <Route path="/passenger" element={<PassengerDetails />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
