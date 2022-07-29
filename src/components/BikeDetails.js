import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchbike } from '../redux/actions/bikes';
import './card-details.scss';

const BikeDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const idBike = Number(id);
  const { bike } = useSelector((state) => state.bike);

  useEffect(() => {
    dispatch(fetchbike(idBike));
  }, []);

  return (
    <>
      <div className='bike_container' key={bike.id}>
        <img src={bike?.image_url} alt={bike.name} />
        <div className='bike_details'>
          <h2>{bike.make}</h2>
          <ul>
            <li>
              Model:
              {' '}
              <span>{bike?.model}</span>
            </li>
            <li className='price'>
              Price:
              {' '}
              <span>
                {bike.price}
                $
              </span>
            </li>
            <li>
              Availability:
              {bike.reserved === false ? (
                <span>No available</span>
              ) : (
                <span>available</span>
              )}
            </li>
          </ul>
          <span className='desc_short'>Let us satisfy your desire!</span>
          <Link to={`/bikes/${idBike}/reservation`}>
            <button type='button' className='add-button'>
              Reserve Bike
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BikeDetails;
