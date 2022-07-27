import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newBike } from '../redux/actions/bikes';

const BikeForm = () => {
  const [car, setCar] = useState({
    make: '',
    model: '',
    description: '',
    image: '',
    is_available: true,
    price: '',
  });

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newBike(car, navigate, e));
  };

  return (
    <>
      <div className='col-span-4 grid grid-rows-8
                        sm:col-span-6 md:col-span-6
                        xs:col-span-7'
      >
        <section className='form-page'>
          <h1 className='text-center'>Create and Add New Bikes </h1>
          <form
            onSubmit={handleSubmit}
            className='add-bike-form flex flex-col w-[60%] mx-auto mt-10'
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
              placeholder='Price per hour'
              type='text'
              name='price'
              value={car.price}
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
            <button className='add-bike-btn bg-main text-white py-4 mt-4' type='submit'>
              Create Bike
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default BikeForm;
