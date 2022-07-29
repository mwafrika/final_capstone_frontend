import { useDispatch } from 'react-redux';
import BikeImage from '../assets/images/bike.png';
import { deleteReservation, fetchReservations } from '../redux/actions/reservation';

export default function reservationList(reservations) {
  const color = {
    color: 'rgb(100 116 139)',
    fontSize: '0.875rem',
  };
  const dispatch = useDispatch();

  function handleRemoveBtn(e) {
    const itemId = e.target.id;
    dispatch(deleteReservation(itemId));

    dispatch(fetchReservations());
  }
  return reservations.map((item) => (
    <li
      className='grid grid-cols-5
                border-2 mx-3
                sm:w-3/4 sm:self-center'
      key={item.id}
    >
      <div className='col-span-2 p-1 flex justify-center'>
        <img src={BikeImage} alt='Item detail' className='sm:w-1/2' />
      </div>
      <div className='col-span-3 flex flex-col
                    p-1 sm:grid sm:grid-cols-2 sm:justify-items-end'
      >
        <div className='flex gap-x-2 w-full sm:col-start-2'>
          <h3 className='text-main self-start'>Model: </h3>
          <p className='font-sm' style={color}>{item.bike.model}</p>
        </div>
        <div className='flex gap-x-2 w-full sm:col-start-2'>
          <h3 className='text-main self-start'>City: </h3>
          <p style={color}>{item.city}</p>
        </div>
        <div className='flex gap-x-2 w-full sm:col-start-2'>
          <h3 className='text-main self-start'>Date: </h3>
          <p style={color}>{item.date_reserved}</p>
        </div>
        <div className='flex gap-x-2 w-full sm:col-start-2'>
          <h3 className='text-main self-start'>Reservation Number: </h3>
          <p style={color}>{item.reservation_number}</p>
        </div>
        <div className='flex gap-x-2 w-full sm:col-start-2'>
          <h3 className='text-main self-start'>Description: </h3>
          <p style={color}>{item.bike.description}</p>
        </div>
        <div className='flex gap-x-2 w-full bg-red-500
                      justify-start border-2 rounded-1/2 sm:col-start-2'
        >
          <button type='button' className='self-center w-full text-white' id={item.id} onClick={(e) => handleRemoveBtn(e)}>Remove</button>
        </div>
      </div>
    </li>
  ));
}
