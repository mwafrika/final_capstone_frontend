/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './card-details.scss';
import settings from './caroussel';

const Bike = ({ bikes }) => (
  bikes.length <= 2
    ? (
      <div className='caroussel_row'>
        {
          bikes.map((bike) => (
            <Link to={`${bike.id}`} key={bike.id}>
              <div className='bike-card'>
                <img src={bike?.image_url} alt={bike.name} />
                <div className='descript'>
                  <p>
                    {bike.make}
                  </p>
                  <div className='model'>
                    {bike?.model}
                  </div>
                  <p>
                    {bike.description}
                  </p>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    )

    : (
      <Slider {...settings}>
        {
            bikes.map((bike) => (
              <Link to={`${bike.id}`} key={bike.id}>
                <div className='bike-card'>
                  <img src={bike?.image_url} alt={bike.name} />
                  <div>
                    <p>
                      {bike?.model}
                    </p>
                  </div>
                  <p className='show-description'>
                    {bike.description}
                  </p>
                </div>
              </Link>
            ))
          }
      </Slider>
    ));

export default Bike;
