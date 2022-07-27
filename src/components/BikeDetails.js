import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchbikes } from '../redux/actions/bikes';
import Navigation from './navigation';
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
      <div className='App grid grid-cols-9 w-full'>
        <div className='col-span-2 grid grid-rows-8
                        bg-gray-100 bg-white
                        border-r-4 border-gray-200
                        sm:hidden md:grid xs:hidden'
        >
          <Navigation />
        </div>
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
      </div>
    </>
  );
};

export default BikeDetails;
