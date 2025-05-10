import { useState } from "react";
import './BookingForm.css';

function BookingForm({ availableTimes, dispatchDateChange, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatchDateChange(selectedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !time || guests < 1 || guests > 10 || !occasion) {
      // Trigger all fields to show errors
      setTouched({
        date: true,
        time: true,
        guests: true,
        occasion: true,
      });
      return;
    }

    setIsSubmitting(true);

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    setTimeout(() => {
      submitForm(formData);
    }, 2000);
  };

  const handleReset = () => {
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("");
    setTouched({
      date: false,
      time: false,
      guests: false,
      occasion: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
      aria-live="polite"
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        onBlur={() => setTouched(prev => ({ ...prev, date: true }))}
        required
      />
      {touched.date && !date && (
        <span className="error">Please select a date.</span>
      )}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        onBlur={() => setTouched(prev => ({ ...prev, time: true }))}
        required
      >
        <option value="">-- Select Time --</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      {touched.time && !time && (
        <span className="error">Please select a time.</span>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        onBlur={() => setTouched(prev => ({ ...prev, guests: true }))}
        required
      />
      {touched.guests && (guests < 1 || guests > 10) && (
        <span className="error">Guests must be between 1 and 10.</span>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        onBlur={() => setTouched(prev => ({ ...prev, occasion: true }))}
        required
      >
        <option value="">-- Select Occasion --</option>
        <option>Diner</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Wedding</option>
      </select>
      {touched.occasion && !occasion && (
        <span className="error">Please select an occasion.</span>
      )}

      <button type="submit" aria-label="Submit reservation">
        Submit Reservation
      </button>

      <button type="button" onClick={handleReset} aria-label="Clear form">
        Clear Form
      </button>

      {isSubmitting && <p aria-live="polite">Submitting reservation...</p>}
    </form>
  );
}

export default BookingForm;
