import React from 'react';
import { BsGear } from 'react-icons/bs';
import { FaArrowCircleRight } from 'react-icons/fa';

export default function ItemDetail() {
  return (
    <>
      <div className='flex flex-col gap-2 mb-3 items-end p-1'>
        <strong>VESPA 946</strong>
        <p>$250 deposit upon any vespa</p>
      </div>
      <ul className='flex flex-col p-1'>
        <li className='flex flex-row justify-between bg-slate-400 p-1'>
          <strong>Finance fee</strong>
          <p>$129</p>
        </li>
        <li className='flex flex-row  justify-between bg-slate-200 p-1'>
          <strong>Option to purchase fee</strong>
          <p>$249</p>
        </li>
        <li className='flex flex-row  justify-between bg-slate-400 p-1'>
          <strong>Total amount payable</strong>
          <p>$1,295</p>
        </li>
        <li className='flex flex-row  justify-between bg-slate-200 p-1'>
          <strong>Duration</strong>
          <p>48 months</p>
        </li>
      </ul>
      <div className='flex gap-1 p-1 mt-3'>
        <strong>5.9% APR</strong>
        <h3>Representative</h3>
      </div>
      <div className='flex flex-col items-end pr-3 mt-5'>
        <strong>DISCOVER MORE MODELS</strong>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/color-picker.jpeg`}
          alt='color picker'
          className='w-3/4'
        />
      </div>
      <div className='self-center flex justify-between items-center px-2 w-1/2 h-10 rounded-full active'>
        <BsGear />
        <strong>Configure</strong>
        <FaArrowCircleRight />
      </div>
    </>
  );
}
