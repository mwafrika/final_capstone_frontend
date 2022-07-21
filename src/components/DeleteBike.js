import React from 'react';

const DeleteBike = () => {
  // const bikes = useSelector((state) => state.allReservation.bikes);
  // const dispatch = useDispatch();

  // const deleteOperation = (id) => {
  //   axios.delete(`${bikesURL}/${id}`);
  // };

  // const handleDelete = (id) => {
  //   deleteOperation(id);
  //   dispatch(deleteBike(id));
  // };

  const bikesArray = [
    {
      id: 1,
      make: 'BMW',
      model: 'X5',
      description: 'BMW X5',
      image:
        'https://www.bmw.com/content/dam/bmw/common/all-models/x-series/x5/2015/at-a-glance/x5-at-a-glance-2015.jpg',
      number_of_passenger: 5,
      is_available: true,
      price_per_hour: 100,
      price_per_day: 1000,
    },
    {
      id: 2,
      make: 'BMW',
      model: 'X6',
      description: 'BMW X6',
      image:
        'https://www.bmw.com/content/dam/bmw/common/all-models/x-series/x5/2015/at-a-glance/x5-at-a-glance-2015.jpg',
      number_of_passenger: 5,
      is_available: true,
      price_per_hour: 100,
      price_per_day: 1000,
    },
  ];

  return (
    <section>
      <ul className='bikes-container'>
        {bikesArray.map((bike) => (
          <li key={bike.id}>
            <img src={bike.image_url} alt='bike_image' width='100px' />
            <div>
              <span>
                {bike.name}
                {' '}
                {bike.model}
              </span>
              <span>
                status:
                {' '}
                {bike.is_available ? 'available' : 'unavailable'}
              </span>
              <button type='button'> Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DeleteBike;
