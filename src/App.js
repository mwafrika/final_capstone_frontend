import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import Bikes from './components/main-page';
import Signup from './components/Signup';
import AddBike from './components/AddBike';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' exactly element={<Bikes />} />
        <Route path='/reservations' />
        <Route path='/add_bike' element={<AddBike />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
