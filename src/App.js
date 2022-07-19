import {
  MdFacebook, MdOutlineEmail, MdCall, MdOutlineLanguage, MdOutlineBuildCircle,
} from 'react-icons/md';

function App() {
  return (
    <div className="App grid grid-cols-5 w-full ">
      <div className="grid grid-rows-8 bg-gray-100">
        <div className="row-span-2 flex justify-center">
          <h2 className="self-center">Logo here</h2>
        </div>
        <div className="row-span-4 flex justify-center">
          <div className="self-center">
            Link List
          </div>
        </div>
        <div className="row-span-2 self-end justify-self-center self-end h-3/4">
          <div className="grid grid-rows-2 gap-2">
            <ul className="flex gap-2 justify-center">
              <li><MdFacebook /></li>
              <li><MdOutlineEmail /></li>
              <li><MdCall /></li>
              <li><MdOutlineLanguage /></li>
              <li><MdOutlineBuildCircle /></li>
            </ul>
            <i> @ 2014E.C CAR RENTAL - PIVA</i>
          </div>
        </div>
      </div>
      <div className="col-span-3">Div 2</div>
      <div className="">Div 3</div>
    </div>
  );
}

export default App;
