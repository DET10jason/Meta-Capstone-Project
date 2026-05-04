import React, { useReducer, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from "./api"; // IMPORT FROM LOCAL FILE
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import OrderPage from './OrderPage';
import Login from './Login';
import Menu from './Menu';

// Helper to fetch from the global API script
const fetchTimes = (date) => window.fetchAPI(date);

// Reducer for available times
export const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') return fetchAPI(new Date(action.payload));
    return state;
};

export const initializeTimes = () => fetchAPI(new Date());

function Main() {
    // Call initializeTimes() as the second argument to ensure it's never undefined
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>} />
        <Route path="/confirmed" element={<h1>Confirmed!</h1>} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Menu" element={<Menu />} />
        {/* Additional routes can be added here */}
      </Routes>
    </main>
  );
}
export default Main;