import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchbikes } from '../redux/actions/bikes';
import Navigation from './navigation';
import Bike from './Bike';
import './BikeList.scss';

const BikeList = () => {
  const dispatch = useDispatch();
  const { bikes } = useSelector((state) => state.bike);

  useEffect(() => {
    dispatch(fetchbikes());
  }, []);

  return (
    <>
      <div className='App grid grid-cols-9 w-full'>
        <div className='col-span-2 grid grid-rows-8
                        bg-gray-100 bg-white
                        border-r-4 border-gray-200
                        sm:hidden md:grid xs:hidden'
        >
          <Navigation />
        </div>
        <div className='home-container'>
          <h1>Available Motor-Bikes</h1>
          <h5>For the best, luxurious and comfortable rides, look no further</h5>
          <div className='cards-container'>
            <Bike bikes={bikes} />
          </div>
        </div>

      </div>
    </>
  );
};

export default BikeList;
