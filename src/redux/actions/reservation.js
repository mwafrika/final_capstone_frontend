import * as API from '../service';

const actionTypes = {
  RESERVATIONS_FETCH_SUCCESS: 'RESERVATIONS_FETCH_SUCCESS',
  RESERVATIONS_FETCH_FAILURE: 'RESERVATIONS_FETCH_FAILURE',
  RESERVATION_FETCH_SUCCESS: 'RESERVATION_FETCH_SUCCESS',
  RESERVATION_FETCH_FAILURE: 'RESERVATION_FETCH_FAILURE',
  RESERVATION_CREATE_SUCCESS: 'RESERVATION_CREATE_SUCCESS',
  RESERVATION_CREATE_FAILURE: 'RESERVATION_CREATE_FAILURE',
};

export const createReservation = (reservation, id) => (dispatch) => {
  API.newReservation(reservation, id)
    .then((reservation) => {
      console.log(reservation, 'action');
      dispatch({
        type: actionTypes.RESERVATION_CREATE_SUCCESS,
        payload: reservation,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.RESERVATION_CREATE_FAILURE,
        payload: error,
      });
    });
};

export const fetchReservations = () => (dispatch) => {
  API.fetchReservations()
    .then((reservations) => {
      dispatch({
        type: actionTypes.RESERVATIONS_FETCH_SUCCESS,
        payload: reservations,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.RESERVATIONS_FETCH_FAILURE,
        payload: error,
      });
    });
};
