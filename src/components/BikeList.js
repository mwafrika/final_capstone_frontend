import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { fetchCars } from '../redux/actions/cars';

const DeleteBike = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const cars = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  console.log(cars, 'check cars components');

  return (
    <section>
      <ul className='bikes-container'>
        {Object.values(cars)?.map((bike) => (
          <li key={bike.id}>
            {/* <img src={bike.image} alt='bike_image' width='100px' /> */}
            <div>
              <span>
                {/* {bike.make}
                {' '} */}
                {bike.model}
              </span>
              <span>
                status:
                {' '}
                {bike.is_available ? 'available' : 'unavailable'}
              </span>
              <button type='button'> Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DeleteBike;
