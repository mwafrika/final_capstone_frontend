import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLocalStorage } from '../helpers/localStore';
import { postBikesToApi } from '../redux/Bikes/bikes';

const BikeForm = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      model,
      price,
      user_id: getLocalStorage().user_id,
      image_url: imageUrl,
    };
    dispatch(postBikesToApi(data));

    e.target.reset();
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="add-bike-form">
        <input
          className="add-bike-input-field input-field"
          placeholder="Bike Name"
          type="text"
          name="name"
          minLength="1"
          maxLength="100"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="add-bike-input-field input-field"
          placeholder="Bike Model"
          type="text"
          name="model"
          minLength="1"
          maxLength="100"
          onChange={(e) => setModel(e.target.value)}
          required
        />
        <input
          className="add-bike-input-field input-field"
          placeholder="Per Day Amount"
          type="number"
          name="price"
          minLength="1"
          maxLength="100"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          className="add-bike-input-field input-field"
          type="text"
          name="image"
          id="bike_image"
          placeholder="Bike Image Link"
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <button
          className="add-bike-btn"
          type="submit"
        >
          Create Bike
        </button>
      </form>
    </section>
  );
};

export default BikeForm;
