import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/actions/cars';

const Image = () => {
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car);

  useEffect(() => {
    if (cars?.length > 0) {
      dispatch(fetchCars());
      setImage(cars[0].image);
    }
  }, [image]);
  console.log(cars, 'check cars components');

  return (
    <div className='w-[20rem]'>
      <img src={image} alt='car' className='w-full h-[30rem] bg-slate-200' />
    </div>
  );
};

export default Image;
