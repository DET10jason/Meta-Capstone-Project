// BookingPage.js
import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div className="booking-container">
      <header className="booking-header">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
      </header>
      <section className="booking-body">
        <h3>RESERVE A TABLE</h3>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </section>
    </div>
  );
}

export default BookingPage;