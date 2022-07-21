import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const signup = async (user) => {
  const response = await axios.post(`${BASE_URL}/users`, {
    user: {
      email: user.email,
      password: user.password,
    },
  });
  return response.data;
};

export const login = async (user) => {
  const response = await axios.post(`${BASE_URL}/users/sign_in`, {
    user: {
      email: user.email,
      password: user.password,
    },
  });

  return response;
};

const authHeader = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  }
  return {};
};

export const createCar = async (car, e) => {
  const formData = new FormData();
  formData.append('car[image]', e.target.image.files[0]);
  formData.append('car[make]', car.make);
  formData.append('car[model]', car.model);
  formData.append('car[description]', car.description);
  formData.append('car[number_of_passenger]', car.number_of_passenger);
  formData.append('car[is_available]', car.is_available);
  formData.append('car[price_per_hour]', car.price_per_hour);
  formData.append('car[price_per_day]', car.price_per_day);

  const response = await axios.post(`${BASE_URL}/cars`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${authHeader()}`,
    },
  });

  console.log(authHeader(), 'response formdata car');

  return response.data;
};

export const fetchCars = async () => {
  const response = await axios.get(`${BASE_URL}/cars`, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${authHeader()}`,
    },
  });

  return response.data;
};
