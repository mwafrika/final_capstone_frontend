import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/user';

const Login = () => {
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
    <section className='col-span-7 xs:col-span-9 flex flex-col justify-center items-center gap-y-3'>
      <h1 className='register-page-heading leading-10 text-main'>Login</h1>
      <form className='flex flex-col items-center gap-y-2 p-2 w-full xs:w-full' onSubmit={handleLogin}>
        <input onChange={handleOnChange} className='w-full sm:w-3/4 border-1 border-main focus:border-main' type='email' name='email' id='signup-email-field' placeholder='Email' required />
        <input onChange={handleOnChange} className='w-full sm:w-3/4 border-1 border-main focus:border-main' type='password' name='password' id='login-password-field' placeholder='Password' required />
        <small className='register-form-error-msg'>{}</small>
        <span className='flex gap-x-3 text-slate-900'>
          Not a member?
          <NavLink className='text-main' to='/registration'>Register</NavLink>
        </span>
        <button className='w-full sm:w-3/4 border-2 p-y-5 bg-main text-white h-10' type='submit'>Login</button>
      </form>
    </section>
  );
};

export default Login;
