import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newCar } from '../../redux/actions/cars';

const Form = () => {
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
    <div className='flex h-full w-full justify-center pt-10'>
      <form
        className='flex justify-between gap-y-1 flex-col w-[20rem]'
        onSubmit={handleSubmit}
      >
        <div className='w-[20rem]'>
          <input
            type='text'
            className='border border-1 border-slategray rounded-lg p-2 w-full'
            id='make'
            aria-describedby='emailHelp'
            placeholder='Make'
            name='make'
            value={car.make}
            onChange={handleChange}
          />
        </div>
        <div className='w-[20rem]'>
          <input
            type='text'
            className='border border-1 border-slategray rounded-lg p-2 w-full'
            id='model'
            placeholder='Model'
            name='model'
            value={car.model}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col w-[20rem]'>
          <input
            type='text'
            className='border border-1 border-slategray rounded-lg p-2 w-full'
            id='price_per_day'
            name='price_per_day'
            placeholder='Price per day'
            value={car.price_per_day}
            onChange={handleChange}
          />
          <span className='form-check-label'>Price per day</span>
        </div>
        <div className='w-[20rem]'>
          <input
            type='text'
            className='border border-1 border-slategray rounded-lg p-2 w-full'
            id='price_per_hour'
            name='price_per_hour'
            placeholder='Price per hour'
            value={car.price_per_hour}
            onChange={handleChange}
          />
        </div>
        <div className='w-[20rem]'>
          <input
            type='checkbox'
            className='border border-1 border-slategray rounded-lg p-2'
            id='is_available'
            name='is_available'
            placeholder='Is Available'
            value={car.is_available}
            onChange={handleChange}
          />
          <span className='form-check-label'>Is Available</span>
        </div>
        <div className='w-[20rem]'>
          <input
            type='text'
            className='border border-1 border-slategray rounded-lg p-2 w-full'
            id='number_of_passenger'
            name='number_of_passenger'
            placeholder='number_of_passenger'
            value={car.number_of_passenger}
            onChange={handleChange}
          />
        </div>
        <div className='w-[20rem]'>
          <input
            type='file'
            className='border border-1 border-slategray rounded-lg p-2 w-full'
            id='image'
            name='image'
            placeholder='Image'
            value={car.image}
            onChange={handleChange}
          />
        </div>
        <textarea
          type='text'
          className='border border-1 border-slategray rounded-lg p-2'
          id='description'
          name='description'
          placeholder='description'
          value={car.description}
          onChange={handleChange}
        />
        <button type='submit' className='bg-sky-500 text-white mb-5 p-2'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
