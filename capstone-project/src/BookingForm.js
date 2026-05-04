import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  // New and existing state variables
  const [fullName, setFullName] = useState(""); // First and Last Name
  const [date, setDate] = useState("");
  const [resTime, setResTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [phone, setPhone] = useState(""); // Phone Number
  const [email, setEmail] = useState(""); // Email
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    // Dispatch action to fetch new times for this date
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { fullName, date, resTime, guests, phone, email, occasion };
    submitForm(formData); // Use the API-connected submission
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "400px", gap: "20px", margin: "0 auto" }} 
      onSubmit={handleSubmit}
    >

      {/* 1. First and Last Name */}
      <label htmlFor="full-name">First and Last Name</label>
      <input 
        type="text" 
        id="full-name" 
        placeholder="Jane Doe"
        value={fullName} 
        onChange={(e) => setFullName(e.target.value)} 
        required 
      />

      {/* 2. Date */}
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

      {/* 3. Time */}
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={resTime} onChange={(e) => setResTime(e.target.value)}>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      {/* 4. Number of Guests */}
      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        id="guests" 
        min="1" 
        max="10" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)}
      />

      {/* 5. Phone Number */}
      <label htmlFor="phone">Phone Number</label>
      <input 
        type="tel" 
        id="phone" 
        placeholder="123-456-7890"
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        required 
      />

      {/* 6. Email (Validation active) */}
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        id="email" 
        placeholder="example@mail.com"
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />

      {/* 7. Occasion */}
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input className="yellow-btn" type="submit" value="Make Your Reservation" />
    </form>
  );
}

export default BookingForm;