/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import {
  FaMotorcycle,
  FaSignInAlt,
  FaTwitter,
  FaFacebook,
  FaGooglePlus,
  FaVimeo,
  FaPinterest,
} from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './Navbar.scss';
import logo from '../assets/images/motor-logo.png';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const loginStatus = false;
  const sidebarData = [
    {
      id: 1, path: '/add_bike', title: 'Add Bike', icon: <FaMotorcycle />, cName: 'nav-text',
    },
    {
      id: 2, path: '/bikes', title: 'Bike List', icon: <FaMotorcycle />, cName: 'nav-text',
    },
    {
      id: 3, path: '/add_reservations', title: 'Reserve Bike', icon: <FaMotorcycle />, cName: 'nav-text',
    },
    {
      id: 4, path: '/reservations', title: 'Reservations', icon: <IoIcons.IoIosPaper />, cName: 'nav-text',
    },
  ];

  const loggedOutLinks = [
    {
      id: 1, path: '/signup', title: 'Signup', icon: <FaSignInAlt />, cName: 'nav-text',
    },
    {
      id: 2, path: '/login', title: 'Login', icon: <FaSignInAlt />, cName: 'nav-text',
    },
  ];

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#97bf0f' }}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu-hidden'}>
          <ul className='grid grid-rows-8 items-center' onClick={showSidebar}>
            <a href='/' className='row-span-2 flex justify-center'>
              <img className='w-1/2 h-1/2' src={logo} alt='logo' />
            </a>
            <ul className='row-span-4 flex flex-col gap-y-3'>
              {
                loginStatus
                  ? sidebarData.map((link) => (
                    <li key={link.id}>
                      <NavLink
                        onClick={showSidebar}
                        key={link.id}
                        to={link.path}
                        className={({ isActive }) => (isActive ? 'single-nav-link-active' : 'single-nav-link')}
                      >
                        {link.icon}
                        {link.title}
                      </NavLink>
                    </li>
                  ))
                  : loggedOutLinks.map((link) => (
                    <li key={link.id} className='flex justify-center hover:bg-main h-[46px]'>
                      <NavLink
                        onClick={showSidebar}
                        key={link.id}
                        to={link.path}
                        className='flex items-center  w-1/2 gap-x-3'
                      >
                        {link.icon}
                        {link.title}
                      </NavLink>
                    </li>
                  ))
              }
            </ul>
            <div className='row-span-2 flex flex-col'>
              <div className='flex justify-center gap-x-2'>
                <FaTwitter className='social-icons' />
                <FaFacebook className='social-icons' />
                <FaGooglePlus className='social-icons' />
                <FaVimeo className='social-icons' />
                <FaPinterest className='social-icons' />
              </div>
              <div className='flex justify-center'>
                <p className='copyrights'>&copy; Final Group Capstone 2022</p>
              </div>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
