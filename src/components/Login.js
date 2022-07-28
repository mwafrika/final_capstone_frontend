import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { login } from '../redux/actions/user';

const Login = () => {
  const { errorLogin = null, loadingLogin = false } = useSelector((state) => state.user);
  const [userLogin, setLogin] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(userLogin, navigate));
  };

  const handleOnChange = (event) => {
    setLogin((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div className='col-span-7 xs:col-span-9 flex flex-col justify-center items-center gap-y-3'>
      <h1 className='register-page-heading leading-10 text-main'>Login</h1>
      <form
        className='flex flex-col items-center
                   gap-y-2 p-2 w-full xs:w-full
                   md:w-1/2'
        onSubmit={handleLogin}
      >
        { loadingLogin && (
          <div className='relative w-32'>
            <div className='absolute insex-x-0 top-2'>
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

        { errorLogin && (
          <p className='text-red-500 font-italic'>Invalid email/password</p>
        )}
        <input onChange={handleOnChange} className='w-full sm:w-3/4 border-1 border-main focus:border-main' type='email' name='email' id='signup-email-field' placeholder='Email' required />
        <input onChange={handleOnChange} className='w-full sm:w-3/4 border-1 border-main focus:border-main' type='password' name='password' id='login-password-field' placeholder='Password' required />
        <small className='register-form-error-msg'>{}</small>
        <span className='flex gap-x-3 text-slate-900'>
          Not a member?
          <NavLink className='text-main' to='/registration'>Register</NavLink>
        </span>
        <input className='w-full sm:w-3/4 border-2 p-y-5 bg-main text-white h-10' type='submit' value='Login' />
      </form>
    </div>
  );
};

export default Login;
