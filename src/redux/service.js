import axios from 'axios';

const BASE_URL = 'https://yamaha-motor.herokuapp.com';
// const BASE_URL = 'http://localhost:3000';


export const signup = async (user) => {
  const response = await axios.post(`${BASE_URL}/users`, {
    user: {
      email: user.email,
      password: user.password,
      username: user.username,
      bio: user.bio,
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

export const createBike = async (bike, e) => {
  const formData = new FormData();
  formData.append('bike[image]', e.target.image.files[0]);
  formData.append('bike[make]', bike.make);
  formData.append('bike[model]', bike.model);
  formData.append('bike[description]', bike.description);
  formData.append('bike[is_available]', bike.is_available);
  formData.append('bike[price]', bike.price);

  const response = await axios.post(`${BASE_URL}/bikes`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${authHeader()}`,
    },
  });

  return response.data;
};

export const fetchBikes = async () => {
  const response = await axios.get(`${BASE_URL}/bikes`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

export const deleteBike = async (id) => {
  const response = await axios.delete(`${BASE_URL}/bikes/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authHeader()}`,
    },
  });

  return response.data;
};

export const getBike = async (id) => {
  const response = await axios.get(`${BASE_URL}/bikes/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};
