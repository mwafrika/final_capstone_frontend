import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchbikes } from '../redux/actions/bikes';

const BikeList = () => {
  const dispatch = useDispatch();
  const { bikes } = useSelector((state) => state.bike);

  useEffect(() => {
    if (bikes.length === 0) {
      dispatch(fetchbikes());
    }
  }, []);

  return (
    <section>
      <ul className='bikes-container'>
        {bikes?.map((bike) => (
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
