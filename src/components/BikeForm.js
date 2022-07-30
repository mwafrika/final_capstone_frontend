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
      <div className='col-span-7 xs:col-span-9 flex flex-col
                      justify-center items-center
                      gap-y-3 xs:h-full'
      >
        <section className='form-page'>
          <p className='text-center' style={{ color: 'rgb(100 116 139)' }}>Add Bike </p>
          <hr />
          <form
            onSubmit={handleSubmit}
            className='add-bike-form flex flex-col w-[60%] sm:w-[90%] mx-auto mt-10'
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
            <button
              className='add-bike-btn bg-main text-white py-4 mt-4'
              type='submit'
            >
              Create Bike
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default BikeForm;
