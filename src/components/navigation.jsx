import React from 'react';
import {
  MdFacebook,
  MdOutlineEmail,
  MdCall,
  MdOutlineLanguage,
  MdOutlineBuildCircle,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/motor-logo.png';

export default function navigation(props) {
  const { toogleMenu } = props;
  return (
    <>
      <div className='row-span-2 flex justify-center'>
        <img
          className='self-center'
          src={logo}
          alt='Logo'
        />
      </div>
      <div className='row-span-4 flex justify-center'>
        <div className='self-center w-full'>
          <ul className='flex flex-col gap-3'>
            <li className='p-1 flex justify-center hover:bg-main'>
              <NavLink to='/home' className='hover:text-white' onClick={toogleMenu}>Home</NavLink>
            </li>
            <li className='p-1 flex justify-center hover:bg-main hover:text-white'>
              <NavLink to='/bikes' onClick={toogleMenu}>Bikes List</NavLink>
            </li>
            <li className='p-1 flex justify-center hover:bg-main hover:text-white'>
              <NavLink to='/add_bike' onClick={toogleMenu}>Add Bike</NavLink>
            </li>
            <li className='p-1 flex justify-center hover:bg-main hover:text-white'>
              <NavLink to='/add-bike' onClick={toogleMenu}>Reservations</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className='row-span-2 justify-self-center self-end h-3/4'>
        <div className='grid grid-rows-2 gap-2'>
          <ul className='flex gap-2 justify-center'>
            <li>
              <MdFacebook />
            </li>
            <li>
              <MdOutlineEmail />
            </li>
            <li>
              <MdCall />
            </li>
            <li>
              <MdOutlineLanguage />
            </li>
            <li>
              <MdOutlineBuildCircle />
            </li>
          </ul>
          <footer>
            <p>&#169; 2020 All right Reserved</p>
          </footer>
        </div>
      </div>
    </>
  );
}
