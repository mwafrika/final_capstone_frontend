import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchbikes } from '../redux/actions/bikes';
import Bike from './Bike';
import './BikeList.scss';

const BikeList = () => {
  const dispatch = useDispatch();
  const { bikes } = useSelector((state) => state.bike);
  // console.log(bikes, 'check bikes');
  useEffect(() => {
    dispatch(fetchbikes());
  }, []);

  return (
    <>
      <div className='home-container'>
        <h1>Available Motor-Bikes</h1>
        <h5>For the best, luxurious and comfortable rides, look no further</h5>
        <div className='cards-container'>
          <Bike bikes={bikes} />
        </div>
      </div>
    </>
  );
};

export default BikeList;
