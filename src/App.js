import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import Bikes from './components/main-page';
import Signup from './components/Signup';
import AddBike from './components/BikeForm';
import BikeList from './components/BikeList';
import BikeDetails from './components/ItemDetail';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' exactly element={<Bikes />} />
        <Route path='/add_bike' element={<AddBike />} />
        <Route path='/bikes/:id' element={<BikeDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/bikes' element={<BikeList />} />
        <Route path='/registration' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
