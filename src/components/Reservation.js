import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { ThreeDots } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
import { createReservation } from '../redux/actions/reservation';
import 'react-datepicker/dist/react-datepicker.css';

const Reservation = () => {
  // const { errorSignup = null, loadingSignup = false } = useSelector(
  //   (state) => state.user
  // );

  const [reservation, setReservation] = useState({
    city: '',
    date_reserved: '',
  });
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { id } = useParams();

  const handleReserve = (e) => {
    e.preventDefault();
    dispatch(createReservation(reservation, id));
  };

  const handleOnChange = (event) => {
    setReservation((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Philadelphia',
    'Phoenix',
  ];

  return (
    <div className='col-span-7 xs:col-span-9 flex flex-col justify-center items-center gap-y-3'>
      <h1 className='register-page-heading text-main'>Reserve</h1>
      <form
        className='flex flex-col items-center
                  gap-y-2 p-2 w-full xs:w-full
                  md:w-1/2'
        onSubmit={handleReserve}
      >
        <select
          className='w-full'
          name='city'
          onChange={handleOnChange}
          value={reservation.city}
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <input
          className='w-full'
          name='date_reserved'
          onChange={handleOnChange}
          type='date'
          value={reservation.date_reserved}
        />

        {/* <input type='hidden' name='bike_id' value={id} /> */}
        <button
          className='w-full sm:w-3/4 border-2 bg-main text-white h-10'
          type='submit'
        >
          Reserve
        </button>
      </form>
    </div>
  );
};

export default Reservation;
