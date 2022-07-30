import React, { useEffect } from 'react';
import { Rings } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/actions/reservation';
import fetchListItems from './reservationListItem';

export default function ReservationList() {
  const { reservations, loading } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, []);
  const listContainer = fetchListItems(reservations);

  return (
    <div className='col-span-7 xs:col-span-9 flex flex-col
                    justify-start items-center gap-y-3 mt-10
                    overflow-y-scroll mb-12'
    >
      <h2 className='text-main'>Reservation List</h2>
      {
        loading === true && (
          <div className='flex'>
            <Rings
              height='180'
              width='180'
              radius='3'
              color='#98be20'
              ariaLabel='three-dots-loading === true'
              wrapperStyle
              wrapperClass
            />
          </div>
        )
      }
      {
        reservations?.length > 0 && (
          <ul className='flex flex-col gap-2'>
            { listContainer }
          </ul>
        )
      }
      {
        reservations.length === 0 && loading === false && (
          <ul className='flex flex-col gap-2'>
            <p>No items yet</p>
          </ul>
        )
      }

    </div>
  );
}
