import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { signup } from '../redux/actions/user';

const Signup = () => {
  const [userSignup, setSignup] = useState({
    email: '',
    password: '',
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
    <section className='authentication-section'>
      <h1 className='register-page-heading'>Sign Up</h1>
      <form id='registeration-form' onSubmit={handleLogin}>
        <input onChange={handleOnChange} className='input-field' type='email' name='email' id='signup-email-field' placeholder='Email' required />
        <input onChange={handleOnChange} className='input-field' type='password' name='password' id='signup-password-confirmation-field' placeholder='Password' required minLength='8' />
        <input onChange={handleOnChange} className='input-field' type='password' name='confirm-password' id='signup-password-field' placeholder='Confirm Password' minLength='8' required />
        <small className='register-form-error-msg'>{}</small>
        <p className='register-to-login'>
          Already a member?
          <NavLink className='register-to-login-link' to='/login'>Login</NavLink>
        </p>
        <button className='form-submit-btn  bg-lime-300 py-4 mt-4' type='submit'>Signup</button>
      </form>
    </section>
  );
};

export default Signup;
