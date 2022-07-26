import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Login from './components/Login';
import './App.css';
import Signup from './components/Signup';
import AddBike from './components/BikeForm';
import BikeList from './components/BikeList';
import BikeDetails from './components/ItemDetail';
import NotFound from './components/NotFound';
import MainPage from './components/main-page';
import Navigation from './components/navigation';

function App() {
  const [navMenu, setNavMenu] = useState(false);
  function toogleMenu() {
    setNavMenu(!navMenu);
  }

  return (
    <>
      <div className={`sm:hidden ${navMenu ? 'hidden' : 'static'}`}>
        <div className='absolute top-3 left-3 w-[190px]'>
          <AiOutlineMenu size={30} color='#98be20' onClick={() => toogleMenu()} />
        </div>
      </div>
      <div className={`sm:hidden ${navMenu ? 'static' : 'hidden'}`}>
        <div className='absolute top-0 left-0 h-full'>
          <div className='grid grid-rows-8 h-full bg-white border-r-2'>
            <div className='relative'>
              <div className='absolute top-3 right-3'>
                <AiOutlineClose size={30} color='#98be20' onClick={() => toogleMenu()} />
              </div>
            </div>
            <Navigation toogleMenu={toogleMenu} /> {/* eslint-disable-line */}
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path='/' exactly element={<MainPage />} />
        <Route exact path='/home' exactly element={<MainPage />} />
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
