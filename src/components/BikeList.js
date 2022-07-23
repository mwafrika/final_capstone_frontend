import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchbikes, deleteBike } from '../redux/actions/bikes';
import { logout } from '../redux/actions/user';

const BikeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bikes } = useSelector((state) => state.bike);

  useEffect(() => {
    dispatch(fetchbikes());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteBike(id, navigate));
    console.log(bikes.length, 'check the length');
  };

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <section>
      <button
        type='button'
        onClick={() => handleLogout()}
        className='bg-red-500 text-white px-5 py-3 mx-5 my-8 justify-start flex float-right'
      >
        Logout
      </button>
      <ul className='flex mx-auto w-full'>
        {bikes?.map((bike) => (
          <li key={bike.id} className='w-[20rem] mx-auto'>
            <Link to={`/bikes/${bike.id}`}>
              <img src={bike?.image_url} alt='bike_image' />
            </Link>
            <div className='flex flex-col'>
              <span>{bike.make}</span>
              <span>{bike?.model}</span>
              <span>{bike.is_available ? 'available' : 'unavailable'}</span>
              <button
                type='submit'
                onClick={() => handleDelete(bike.id)}
                className='bg-red-500 text-white px-2 py-1 rounded-full'
              >
                {' '}
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BikeList;
