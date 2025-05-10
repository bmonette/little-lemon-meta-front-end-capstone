import { useReducer, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import HomePage from "./Homepage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import About from "./About";
import Menu from "./Menu";

import { initializeTimes, updateTimes } from "./bookingUtils";

function Main() {
  // Use initializeTimes() instead of []
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  useEffect(() => {
    const today = new Date();

    console.log("Is fetchAPI available?", typeof window.fetchAPI);

    if (typeof window.fetchAPI === "function") {
      const times = window.fetchAPI(today);
      console.log("Initial times from API:", times);
      dispatch({ type: "setTimes", times });
    } else {
      console.warn("⚠️ fetchAPI is NOT available. The script may not be loading.");
    }
  }, []);

  const handleDateChange = (date) => {
    if (typeof window.fetchAPI === "function") {
      const times = window.fetchAPI(new Date(date));
      console.log("Updated times from API:", times);
      dispatch({ type: "setTimes", times });
    } else {
      console.warn("⚠️ fetchAPI is NOT available during date change.");
    }
  };

  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = window.submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatchDateChange={handleDateChange}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </main>
  );
}

export default Main;