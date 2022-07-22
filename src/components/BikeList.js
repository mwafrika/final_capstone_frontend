import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { fetchCars } from '../redux/actions/cars';

const BikeList = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { cars } = useSelector((state) => state.car);

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(fetchCars());
    }
  }, []);

  console.log(cars, 'check cars components');

  return (
    <section>
      <ul className='bikes-container'>
        {cars?.map((bike) => (
          <li key={bike.id}>
            <img src={bike?.image_url} alt='bike_image' width='100px' />
            <div>
              <span>
                {bike.make}
                {' '}
                {bike?.model}
              </span>
              <span>{bike.is_available ? 'available' : 'unavailable'}</span>
              <button type='button'> Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BikeList;
