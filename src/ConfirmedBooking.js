import { Link } from "react-router-dom";
import "./ConfirmedBooking.css";

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking">
      <div className="confirmation-card">
        <h2>Booking Confirmed!</h2>
        <p>Your reservation has been successfully submitted.</p>
        <p>We look forward to welcoming you at <strong>Little Lemon</strong>!</p>
        <Link to="/" className="return-home">Return to Home</Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
