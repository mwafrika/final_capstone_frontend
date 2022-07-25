import React from 'react';
import {
  MdFacebook,
  MdOutlineEmail,
  MdCall,
  MdOutlineLanguage,
  MdOutlineBuildCircle,
} from 'react-icons/md';

export default function navigation() {
  return (
    <>
      <div className='row-span-2 flex justify-center'>
        <img
          className='self-center'
          src={`${process.env.PUBLIC_URL}/assets/images/logo_transparent.png`}
          alt='Logo'
        />
      </div>
      <div className='row-span-4 flex justify-center'>
        <div className='self-center'>
          <ul className='flex flex-col gap-1'>
            <li className='active p-1'>MODELS</li>
            <li className='p-2'>LIFESTYLE</li>
            <li className='p-2'>TEST DRIVE</li>
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
