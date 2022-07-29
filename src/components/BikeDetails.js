import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchbike, reserveBike } from '../redux/actions/bikes';
import './card-details.scss';

const BikeDetails = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const idBike = Number(id.id);
  const { bike } = useSelector((state) => state.bike);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchbike(idBike));
  }, []);

  function handleReserve(e) {
    const reserve = {
      bike_id: e.target.id,
      city: 'Addis Ababa',
      date_reserved: '2022-July-27',
    };
    dispatch(reserveBike(reserve, navigate));
  }

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
          <button type='button' className='add-button' id={bike.id} onClick={(e) => handleReserve(e)}>
            Reserve
          </button>
        </div>
      </div>
    </>
  );
};

export default BikeDetails;
