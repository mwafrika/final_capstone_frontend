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
    <section className='authentication-section'>
      <h1 className='login-page-heading'>Login</h1>
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
          Not a member?
          <NavLink className='login-to-register-link' to='/Registration'>
            Register
          </NavLink>
        </span>
        <input
          onChange={handleOnChange}
          className='form-submit-btn'
          type='submit'
          value='Login'
        />
      </form>
    </section>
  );
};

export default Login;
