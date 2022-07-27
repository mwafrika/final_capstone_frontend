import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchbikes } from '../redux/actions/bikes';
import './card-details.scss';

const BikeDetails = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const idBike = Number(id.id);
  const { bikes } = useSelector((state) => state.bike);

  useEffect(() => {
    dispatch(fetchbikes(idBike));
  }, []);

  return (
    <>
      <div className='bike_container' key={bikes.id}>
        <img src={bikes?.image_url} alt={bikes.name} />
        <div className='bike_details'>
          <h2>{bikes.make}</h2>
          <ul>
            <li>
              Model:
              {' '}
              <span>{bikes?.model}</span>
            </li>
            <li className='price'>
              Price:
              {' '}
              <span>
                {bikes.price}
                $
              </span>
            </li>
            <li>
              Availability:
              {bikes.reserved === false ? (
                <span>No available</span>
              ) : (
                <span>available</span>
              )}
            </li>
          </ul>
          <span className='desc_short'>Let us satisfy your desire!</span>
          <Link to='/add_reservations'>
            <button
              type='button'
              className='add-button'
            >
              Reserve Bike
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BikeDetails;
