import React from 'react';

export default function ItemDetailImage() {
  return (
    <>
      <img
        className='row-span-6 self-center justify-self-center'
        src={`${process.env.PUBLIC_URL}/assets/images/bike.png`}
        alt='bike'
      />
    </>
  );
}
