import * as API from '../service';

const actionTypes = {
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
  USER_LOGOUT_SUCCESS: 'USER_LOGOUT_SUCCESS',
  USER_LOGOUT_FAILURE: 'USER_LOGOUT_FAILURE',
  USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  USER_REGISTER_FAILURE: 'USER_REGISTER_FAILURE',
};

export const login = (userData, location) => (dispatch) => {
  API.login(userData)
    .then((response) => {
      dispatch({
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: response.data,
      });

      const result = response.headers.authorization;
      localStorage.setItem('token', result.split(' ')[1]);
      localStorage.setItem('user', JSON.stringify(response.data));

      location('/bikes');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.USER_LOGIN_FAILURE,
        payload: error,
      });
    });
};

export const signup = (userData, location) => (dispatch) => {
  API.signup(userData)
    .then((user) => {
      dispatch({
        type: actionTypes.USER_REGISTER_SUCCESS,
        payload: user,
      });
      location('/login');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.USER_REGISTER_FAILURE,
        payload: error,
      });
    });
};

export const logout = (navigate) => (dispatch) => {
  if (localStorage.getItem('token')) {
    localStorage.removeItem('token');
    dispatch({
      type: actionTypes.USER_LOGOUT_SUCCESS,
    });
    navigate('/');
  } else {
    dispatch({
      type: actionTypes.USER_LOGOUT_FAILURE,
    });
  }
};
