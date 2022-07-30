/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './card-details.scss';
import settings from './caroussel';

const color = {
  color: 'rgb(100 116 139)',
  fontSize: '0.875rem',
};

const Bike = ({ bikes }) => (bikes.length <= 2 ? (
  <div className='caroussel_row'>
    {bikes.map((bike) => (
      <Link to={`${bike.id}`} key={bike.id}>
        <div className='bike-card'>
          <img src={bike.image_url} loading='lazy' alt={bike.name} />
          <div className='flex gap-5 w-full p-2 justify-start'>
            <h3 className='text-main self-start'>Name:</h3>
            <p style={color}>{bike.make}</p>
          </div>
          <div className='flex gap-5 w-full p-2 justify-start'>
            <h3 className='text-main self-start'>Model:</h3>
            <p style={color}>{bike.model}</p>
          </div>
          <div className='flex gap-5 w-full p-2 justify-start'>
            <h3 className='text-main self-start'>Description:</h3>
            <p style={color}>{bike.description}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
) : (
  <Slider {...settings}>
    {bikes.map((bike) => (
      <Link to={`${bike.id}`} key={bike.id}>
        <div className='bike-card'>
          <img src={bike.image_url} alt={bike.name} loading='lazy' />
          <div>
            <p>{bike?.model}</p>
          </div>
          <p className='show-description'>{bike.description}</p>
        </div>
      </Link>
    ))}
  </Slider>
));

export default Bike;
