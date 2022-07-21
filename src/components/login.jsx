import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
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
    <>
      <div className='grid grid-cols-12 grid-rows-[10vh_minmax(300px,80vh)_10vh] bg-gray-200'>
        <div className='col-start-3 col-end-11 row-start-2 row-end-3 bg-white flex shadow-lg'>
          <div className='w-1/2'>
            <img
              src='https://images.unsplash.com/photo-1610818423826-4b4579c7ea74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRvd25sb2Fkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
              alt='login'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-1/2 h-full flex items-center flex-col justify-center'>
            <div className='text-center w-full'>
              <h1 className='text-3xl font-bold mb-4 text-slate-700'>
                Sign In
              </h1>
              <form
                className='flex-col w-full px-8 flex gap-y-4 mb-6 pt-4'
                onSubmit={handleLogin}
              >
                <div className='flex flex-col my-2 w-full'>
                  <input
                    className='w-full border border-gray-400 p-2 outline-none focus:border-blue-500 rounded-lg bg-white'
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={userLogin.email}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className='flex flex-col my-2 w-full'>
                  <input
                    className='w-full border border-gray-400 p-2 outline-none focus:border-blue-500 rounded-lg bg-white'
                    type='password'
                    placeholder='password'
                    name='password'
                    value={userLogin.password}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='w-full bg-slate-500 text-white p-2 rounded-lg hover:bg-slate-600'
                >
                  Sign In
                </button>
                {/* <ToastContainer autoClose={2000} /> */}
              </form>
              <div className='w-[85%] mx-auto flex flex-col mt-6 gap-y-2'>
                <div className='text-sm text-center flex justify-start'>
                  <p className='text-gray-500'> Forgot your password?</p>
                  <span className='text-slate-800'>
                    &nbsp;
                    <Link to='/reset-password'>Reset here</Link>
                  </span>
                </div>
                <div className='text-sm flex justify-start'>
                  <p className='text-gray-500'>do not have an account?</p>
                  <span className='text-slate-800'>
                    &nbsp;
                    <Link to='/signup'>Sign Up</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
