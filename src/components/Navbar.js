/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from 'react';
import {
  FaMotorcycle,
  FaSignInAlt,
  FaBars, FaTwitter,
  FaFacebook,
  FaGooglePlus,
  FaVimeo,
  FaPinterest,
} from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './Navbar.scss';
import { login } from '../redux/service';
import logo from '../assets/images/motor-logo.png';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [loginStatus, setLoginStatus] = useState(!login() ? login({ user: '', logIn: false }) : login());
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

  useEffect(() => {
    setLoginStatus(login().logIn);
  });

  return (
    <>
      <IconContext.Provider value={{ color: '#97bf0f' }}>
        <div className='navbar'>
          <NavLink to='/' className='menu-bars'>
            <FaBars onClick={showSidebar} />
          </NavLink>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu-hidden'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <NavLink to='/' className=''>
              <img className='nav-logo' src={logo} alt='logo' />
            </NavLink>
            <li className='navbar-toggle'>
              <NavLink to='/' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </NavLink>
            </li>
            <div className={loginStatus ? 'nav-links' : 'nav-links logged-out'}>
              {
                loginStatus
                  ? sidebarData.map((link) => (
                    <li key={link.id} className={link.cName}>
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
                    <li key={link.id} className={link.cName}>
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
              }
            </div>
            <div className='social-menu'>
              <FaTwitter className='social-icons' />
              <FaFacebook className='social-icons' />
              <FaGooglePlus className='social-icons' />
              <FaVimeo className='social-icons' />
              <FaPinterest className='social-icons' />
            </div>
            <p className='copyrights'>&copy; Final Group Capstone 2022</p>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
