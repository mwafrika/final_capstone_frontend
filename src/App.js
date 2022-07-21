import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Bikes from './redux/Bikes/bikes';
import Reservations from './redux/Reservations/reservation';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" exactly element={<Bikes />} />
        <Route path="/Reservations" component={Reservations} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registration" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
