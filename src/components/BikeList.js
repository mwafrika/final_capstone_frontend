import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchbikes } from '../redux/actions/bikes';
import Bike from './Bike';
import './BikeList.scss';

const BikeList = () => {
  const dispatch = useDispatch();
  const { bikes } = useSelector((state) => state.bike);
  // const [isMobile, setIsMobile] = useState(false);
  let isMobile = false;

  useEffect(() => {
    dispatch(fetchbikes());
  }, []);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useLayoutEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }

  const { width } = useWindowDimensions();
  if (width < 800) {
    isMobile = true;
  }

  return (
    <>
      <div className='home-container'>
        <h2 className='m-t-12'>Available Motor-Bikes</h2>
        <h5 className='text-center'>For the best, luxurious and comfortable rides, look no further</h5>
        <div className='cards-container'>
          <Bike bikes={bikes} isMobile={isMobile} />
        </div>
      </div>
    </>
  );
};

export default BikeList;
