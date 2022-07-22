import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import Bikes from './components/main-page';
import Signup from './components/Signup';
import AddBike from './components/BikeForm';
import BikeList from './components/BikeList';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' exactly element={<Bikes />} />
        <Route path='/reservations' />
        <Route path='/add_bike' element={<AddBike />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/bikes' element={<BikeList />} />
      </Routes>
    </>
  );
}

export default App;
