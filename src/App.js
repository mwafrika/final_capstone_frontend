import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Bikes from './components/main-page';
import Reservations from './redux/Reservations/reservation';
import Login from './components/Login';
import Signup from './components/Signup';
import AddBike from './components/AddBike';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" exactly element={<Bikes />} />
        <Route path="/Reservations" component={Reservations} />
        <Route path="/add_bike" element={<AddBike />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registration" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
