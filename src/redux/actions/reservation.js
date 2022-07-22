const FETCH_RESERV = 'FETCH_RESERV';
const CREATE_RESERV = 'CREATE_RESERV';
const DELETE_DATA = 'DELETE_DATA';
const FETCH_BIKE = 'FETCH_BIKE';
const DELETE_BIKE = 'DELETE_BIKE';
const ADD_BIKE = 'ADD_BIKE';

// Initial State
const initialState = {
  reservation: [],
  bikes: [],
};
// Actions
export const setData = (reservations) => ({
  type: FETCH_RESERV,
  payload: reservations,
});

export const createReserve = (reservation) => ({
  type: CREATE_RESERV,
  payload: reservation,
});

export const deleteData = (id) => ({
  type: DELETE_DATA,
  payload: id,
});
export const setBikes = (bikes) => ({
  type: FETCH_BIKE,
  payload: bikes,
});
export const deleteCar = (id) => ({
  type: DELETE_BIKE,
  payload: id,
});
export const addBike = (bike) => ({
  type: ADD_BIKE,
  payload: bike,
});
// reducer

const reservationReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERV:
      return {
        ...state,
        reservation: action.payload,
      };
    case DELETE_DATA:
      return {
        ...state,
        reservation: state.reservation.filter(
          (item) => item.id !== action.payload,
        ),
      };
    case FETCH_BIKE:
      return {
        ...state,
        bikes: action.payload,
      };
    case CREATE_RESERV:
      return {
        ...state,
        reservation: [...state.reservation, action.payload],
      };
    case DELETE_BIKE:
      return {
        ...state,
        bikes: state.bikes.filter((item) => item.id !== action.payload),
      };
    case ADD_BIKE:
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    default:
      return state;
  }
};

export default reservationReducers;
