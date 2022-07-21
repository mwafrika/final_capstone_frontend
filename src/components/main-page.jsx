import {
  MdFacebook,
  MdOutlineEmail,
  MdCall,
  MdOutlineLanguage,
  MdOutlineBuildCircle,
} from 'react-icons/md';

import { BsGear } from 'react-icons/bs';
import { FaArrowCircleRight } from 'react-icons/fa';
import { TiMediaPlayReverseOutline } from 'react-icons/ti';

export default function Home() {
  return (
    <div className='App grid grid-cols-6 w-full '>
      <div className='grid grid-rows-8 bg-gray-100'>
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
        <div className='row-span-2 self-end justify-self-center self-end h-3/4'>
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
      </div>
      <div className='col-span-3 grid grid-rows-8'>
        <img
          className='row-span-6 self-center justify-self-center'
          src={`${process.env.PUBLIC_URL}/assets/images/bike.png`}
          alt='bike'
        />
        <div className='flex rounded-r-full w-20 h-10 justify-end items-center active'>
          <TiMediaPlayReverseOutline size={40} />
        </div>
      </div>
      <div className='col-span-2 flex flex-col justify-center mr-5'>
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
      </div>
    </div>
  );
}
