// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import BikeForm from './BikeForm';
// import Response from './Response';

// const AddBike = () => {
//   const bikes = useSelector((state) => state.userReducer);

//   const [show, setShow] = useState(true);

//   return (
//     <>
//       <h1>Create and Add New Bikes </h1>
//       {
//             bikes.status === 201 ? (
//               <Response show={show} setShow={setShow} />
//             ) : (
//               <BikeForm />
//             )
//           }
//     </>
//   );
// };

// export default AddBike;
