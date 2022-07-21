import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newCar } from '../redux/actions/cars';

const BikeForm = () => {
  const [car, setCar] = useState({
    make: '',
    model: '',
    description: '',
    image: '',
    number_of_passenger: '',
    is_available: true,
    price_per_hour: '',
    price_per_day: '',
  });

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cars = useSelector((state) => state.car);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newCar(car, navigate, e));
    console.log(cars, 'check cars components');
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className='add-bike-form flex flex-col w-[40%] mx-auto mt-10'
      >
        <input
          className='add-bike-input-field input-field'
          placeholder='Bike Name'
          type='text'
          name='make'
          minLength='1'
          maxLength='100'
          onChange={handleChange}
          value={car.make}
          required
        />
        <input
          className='add-bike-input-field input-field'
          placeholder='Bike Model'
          type='text'
          name='model'
          minLength='1'
          maxLength='100'
          onChange={handleChange}
          value={car.model}
          required
        />
        <input
          className='add-bike-input-field input-field'
          placeholder='Per Day Amount'
          type='text'
          name='price_per_day'
          value={car.price_per_day}
          minLength='1'
          maxLength='100'
          onChange={handleChange}
          required
        />
        <input
          className='add-bike-input-field input-field'
          type='file'
          id='image'
          name='image'
          placeholder='Image'
          value={car.image}
          onChange={handleChange}
          required
        />
        <input
          className='add-bike-input-field input-field'
          placeholder='Number of Passengers'
          type='text'
          name='number_of_passenger'
          value={car.number_of_passenger}
          minLength='1'
          maxLength='100'
          onChange={handleChange}
          required
        />
        <input
          className='add-bike-input-field input-field'
          placeholder='Price per hour'
          type='text'
          name='price_per_hour'
          value={car.price_per_hour}
          minLength='1'
          maxLength='100'
          onChange={handleChange}
          required
        />
        <input
          className='add-bike-input-field input-field'
          placeholder='Price per day'
          type='text'
          name='price_per_day'
          value={car.price_per_day}
          minLength='1'
          maxLength='100'
          onChange={handleChange}
          required
        />
        <textarea
          className='add-bike-input-field input-field'
          placeholder='Description'
          type='text'
          name='description'
          value={car.description}
          minLength='1'
          maxLength='100'
          onChange={handleChange}
          required
        />
        <button className='add-bike-btn bg-lime-300 py-4 mt-4' type='submit'>
          Create Bike
        </button>
      </form>
    </section>
  );
};

export default BikeForm;
