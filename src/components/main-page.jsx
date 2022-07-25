import { TiMediaPlayReverseOutline } from 'react-icons/ti';

import Navigation from './Navbar';
import ItemDetail from './ItemDetail';
import ItemDetailImage from './ItemDetailImage';

export default function Home() {
  return (
    <div className='App grid grid-cols-6 w-full '>
      <div className='grid grid-rows-8 bg-gray-100'>
        <Navigation />
      </div>
      <div className='col-span-3 grid grid-rows-8'>
        <ItemDetailImage />
        <div className='flex rounded-r-full w-20 h-10 justify-end items-center active'>
          <TiMediaPlayReverseOutline size={40} />
        </div>
      </div>
      <div className='col-span-2 flex flex-col justify-center mr-5'>
        <ItemDetail />
      </div>
    </div>
  );
}
