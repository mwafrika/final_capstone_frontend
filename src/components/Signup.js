import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import { NavLink, useNavigate } from 'react-router-dom';
import { signup } from '../redux/actions/user';

const Signup = () => {
  const { error, loading } = useSelector((state) => state.user);
  console.log('loading', loading);
  const [userSignup, setSignup] = useState({
    email: '',
    password: '',
    bio: '',
    username: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signup(userSignup, navigate));
  };

  const handleOnChange = (event) => {
    setSignup((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className='col-span-7 xs:col-span-9 flex flex-col justify-center items-center gap-y-3'>
      <h1 className='register-page-heading text-main'>Sign Up</h1>
      <form
        className='flex flex-col items-center
                  gap-y-2 p-2 w-full xs:w-full
                  md:w-1/2'
        onSubmit={handleLogin}
      >
        <input
          onChange={handleOnChange}
          className='w-full sm:w-3/4 border-1 border-main focus:border-main'
          type='text'
          name='username'
          id='signup-email-field'
          placeholder='Username'
          required
          value={userSignup.username}
        />
        <input
          onChange={handleOnChange}
          className='w-full sm:w-3/4 border-1 border-main focus:border-main'
          type='email'
          name='email'
          id='signup-email-field'
          placeholder='Email'
          required
          value={userSignup.email}
        />
        <input
          onChange={handleOnChange}
          className='w-full sm:w-3/4 border-1 border-main  focus:border-main'
          type='password'
          name='password'
          id='signup-password-confirmation-field'
          placeholder='Password'
          required
          minLength='6'
          value={userSignup.password}
        />
        <textarea
          onChange={handleOnChange}
          className='w-full sm:w-3/4 border-1 border-main focus:border-main'
          type='text'
          name='bio'
          id='signup-email-field'
          placeholder='Bio'
          required
          value={userSignup.bio}
        />

        { loading && (
          <div className='relative w-32'>
            <div className='absolute insex-x-0 -top-16'>
              <ThreeDots
                height='180'
                width='180'
                radius='3'
                color='#98be20'
                ariaLabel='three-dots-loading'
                wrapperStyle
                wrapperClass
              />
            </div>
          </div>
        )}

        { error && (
          <p className='text-red-500 font-italic'>{error}</p>
        )}

        <small className='register-form-error-msg'>{}</small>
        <p className='flex justify-center w-full'>
          Already a member?
          <NavLink className='text-main' to='/login'>
            Login
          </NavLink>
        </p>
        <button
          className='w-full sm:w-3/4 border-2 bg-main text-white h-10'
          type='submit'
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
