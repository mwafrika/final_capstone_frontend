import React, { useEffect } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TiMediaPlayReverseOutline } from 'react-icons/ti';
import { fetchbike } from '../redux/actions/bikes';
import ItemDetailImage from './ItemDetailImage';

export default function ItemDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { bike } = useSelector((state) => state.bike);

  useEffect(() => {
    dispatch(fetchbike(id));
  }, [dispatch, id]);

  return (
    <>
      <div className='col-span-4 grid grid-rows-8
                        sm:col-span-6 md:col-span-4
                        xs:col-span-5'
      >
        <ItemDetailImage />
        <div className='flex rounded-r-full w-20 h-10 justify-end items-center active'>
          <TiMediaPlayReverseOutline size={40} />
        </div>
      </div>
      <div className='col-span-3 flex flex-col justify-center mr-5
                        xs:col-span-4'
      >
        <div className='flex flex-col gap-2 mb-3 items-end p-1'>
          <strong>{bike.model}</strong>
          <p>$250 Deposit</p>
        </div>
        <ul className='flex flex-col p-1 border-2'>
          <li className='flex flex-row justify-between bg-main text-white p-1'>
            <strong>Finance fee</strong>
            <p>$129</p>
          </li>
          <li className='flex flex-row  justify-between p-1'>
            <strong>purchase fee</strong>
            <p>$249</p>
          </li>
          <li className='flex flex-row  justify-between bg-main text-white p-1'>
            <strong>Total</strong>
            <p>$1,295</p>
          </li>
          <li className='flex flex-row  justify-between p-1'>
            <strong>Duration</strong>
            <p>48 months</p>
          </li>
        </ul>
        <div className='flex gap-1 p-1 mt-3'>
          <strong>5.9% APR</strong>
        </div>
        <div className='flex flex-col items-end pr-3 mt-5'>
          <strong>DISCOVER MORE MODELS</strong>
          <img
            src={bike.image_url}
            alt='color picker'
            className='w-1/2'
          />
        </div>
        <div className='self-center flex justify-between items-center
                        px-2 w-1/2 h-10 rounded-full active xs:w-full'
        >
          <FaArrowCircleRight />
          <strong>Reserve</strong>
          <FaArrowCircleLeft />
        </div>
      </div>
    </>
  );
}
