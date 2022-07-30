import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteReservation } from '../redux/actions/reservation';

export default function reservationList(reservations) {
  const color = {
    color: 'rgb(100 116 139)',
    fontSize: '0.875rem',
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleRemoveBtn(e) {
    const itemId = e.target.id;
    dispatch(deleteReservation(itemId, navigate));
  }
  return reservations.map((item) => (
    <li
      className='grid grid-cols-5
                border-2 mx-3
                sm:w-full sm:self-center sm:min-w-[500px]'
      key={item.id}
    >
      <div className='col-span-2 p-1 flex justify-center'>
        <img src={item.bike.image_url} alt={item.name} className='sm:w-1/2' />
      </div>
      <div className='col-span-3 flex flex-col
                    p-1'
      >
        <div className='flex gap-x-2 w-full '>
          <h3 className='text-main self-start'>Model: </h3>
          <p className='font-sm' style={color}>{item.bike.model}</p>
        </div>
        <div className='flex gap-x-2 w-full'>
          <h3 className='text-main self-start'>City: </h3>
          <p style={color}>{item.city}</p>
        </div>
        <div className='flex gap-x-2 w-full'>
          <h3 className='text-main self-start'>Date: </h3>
          <p style={color}>{item.date_reserved}</p>
        </div>
        <div className='flex gap-x-2 w-full'>
          <h3 className='text-main self-start'>Description: </h3>
          <p style={color}>{item.bike.description}</p>
        </div>
        <div className='flex gap-x-2 w-full bg-red-500
                      justify-start border-2 sm:w-1/2'
        >
          <button type='button' className='self-center w-full text-white' id={item.id} onClick={(e) => handleRemoveBtn(e)}>Remove</button>
        </div>
      </div>
    </li>
  ));
}
