import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bikesURL } from '../helpers/api';
import deleteBike from '../redux/Reservations/reservation';

const DeleteBike = () => {
  const bikes = useSelector((state) => state.allReservation.bikes);
  const dispatch = useDispatch();

  const deleteOperation = (id) => {
    axios.delete(`${bikesURL}/${id}`);
  };

  const handleDelete = (id) => {
    deleteOperation(id);
    dispatch(deleteBike(id));
  };

  return (
    <section>
      <ul className="bikes-container">
        {
          bikes.map((bike) => (
            <li key={bike.id}>
              <img src={bike.image_url} alt="bike_image" width="100px" />
              <div>
                <span>
                  {bike.name}
                  {' '}
                  {bike.model}
                </span>
                <button type="button" onClick={() => handleDelete(bike.id)}> Delete</button>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default DeleteBike;
