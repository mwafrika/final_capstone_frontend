import { Outlet } from 'react-router';
import Navigation from './navigation';

export default function Home() {
  return (
    <>
      <div className='App grid grid-cols-9 w-full xs:flex-col xs:flex md:grid-cols-9 md:grid md:w-full xs:overflow-y-scroll'>
        <div
          className='col-span-2 grid grid-rows-8
                        bg-white
                        border-r-4 border-gray-200
                        sm:max-h-[990px]
                        sm:hidden md:grid xs:hidden'
        >
          <Navigation />
        </div>
        <Outlet />
      </div>
    </>
  );
}
