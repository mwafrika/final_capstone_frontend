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
      <h1 className='login-page-heading'>Register</h1>
      <form id='login-form' onSubmit={handleLogin}>
        <input
          onChange={handleOnChange}
          className='input-field'
          type='email'
          name='email'
          id='signup-email-field'
          placeholder='Email'
          required
        />
        <input
          onChange={handleOnChange}
          className='input-field'
          type='password'
          name='password'
          id='login-password-field'
          placeholder='Password'
          required
        />
        <small className='register-form-error-msg'>{}</small>
        <span className='login-to-register'>
          Have an account?
          <NavLink className='login-to-register-link' to='/login'>
            Login
          </NavLink>
        </span>
        <input
          onChange={handleOnChange}
          className='form-submit-btn'
          type='submit'
          value='Signup'
        />
      </form>
    </section>
  );
};

export default Signup;
