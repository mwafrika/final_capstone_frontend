import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate , useParams} from 'react-router-dom';
import { createReservation } from '../redux/actions/reservation';

const ReserveForm = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [reserve, setReserve] = useState({
    date_reserved:'',
    city:'',
    bike_id: id,
  });

  const handleChange = (e) => {
    setReserve({
      ...reserve,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReservation(reserve, navigate));
    setReserve({
        date_reserved:'',
        city:'',
    })
  };

  return (
    <>
      <div className='col-span-7 xs:col-span-9 flex flex-col
                      justify-center items-center
                      gap-y-3 xs:h-full'
      >
        <section className='form-page'>
          <p className='text-center' style={{ color: 'rgb(100 116 139)' }}>Reserve Bike </p>
          <hr />
          <form
            onSubmit={handleSubmit}
            className='add-bike-form flex flex-col w-[60%] sm:w-[90%] mx-auto mt-10'
          >
            <input
              className='add-bike-input-field input-field'
              placeholder='City'
              type='text'
              name='city'
              minLength='1'
              maxLength='100'
              onChange={handleChange}
              value={reserve.city}
              required
            />
            <input
              className='add-bike-input-field input-field'
              placeholder='Date'
              type='date'
              name='date_reserved'
              onChange={handleChange}
              value={reserve.date_reserved}
              required
            />
            
            <button
              className='add-bike-btn bg-main text-white py-4 mt-4'
              type='submit'
            >
              Reserve
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default ReserveForm;
