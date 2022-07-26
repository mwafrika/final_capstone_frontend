import { TiMediaPlayReverseOutline } from 'react-icons/ti';
import Navigation from './navigation';
import ItemDetail from './ItemDetail';
import ItemDetailImage from './ItemDetailImage';

export default function Home() {
  return (
    <>
      <div className='App grid grid-cols-9 w-full'>
        <div className='col-span-2 grid grid-rows-8
                        bg-gray-100 bg-white
                        border-r-4 border-gray-200
                        sm:hidden md:grid xs:hidden'
        >
          <Navigation />
        </div>
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
          <ItemDetail />
        </div>
      </div>
    </>
  );
}
