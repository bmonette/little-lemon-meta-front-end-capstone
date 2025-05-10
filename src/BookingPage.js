import BookingForm from "./BookingForm";
import "./BookingPage.css";

function BookingPage({ availableTimes, dispatchDateChange, submitForm }) {
  return (
    <section className="booking">
      <h2>Book Your Table</h2>
      <div className="booking-layout">
        <div className="booking-image left-image">
          <img src="/assets/dining-room.png" alt="Restaurant interior" />
        </div>
        <BookingForm
          availableTimes={availableTimes}
          dispatchDateChange={dispatchDateChange}
          submitForm={submitForm}
        />
        <div className="booking-image right-image">
          <img src="/assets/waitress.png" alt="Food served" />
        </div>
      </div>
    </section>
  );
}

export default BookingPage;
