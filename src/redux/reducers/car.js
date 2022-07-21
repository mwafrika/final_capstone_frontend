const actionTypes = {
  BIKES_FETCH_SUCCESS: 'BIKES_FETCH_SUCCESS',
  BIKES_FETCH_FAILURE: 'BIKES_FETCH_FAILURE',
  BIKE_FETCH_SUCCESS: 'BIKE_FETCH_SUCCESS',
  BIKE_FETCH_FAILURE: 'BIKE_FETCH_FAILURE',
  BIKE_CREATE_SUCCESS: 'BIKE_CREATE_SUCCESS',
  BIKE_CREATE_FAILURE: 'BIKE_CREATE_FAILURE',
  BIKE_UPDATE_SUCCESS: 'BIKE_UPDATE_SUCCESS',
  BIKE_UPDATE_FAILURE: 'BIKE_UPDATE_FAILURE',
  BIKE_DELETE_SUCCESS: 'BIKE_DELETE_SUCCESS',
  BIKE_DELETE_FAILURE: 'BIKE_DELETE_FAILURE',
};

const initialState = {
  cars: [],
  car: {},
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BIKES_FETCH_SUCCESS:
      return {
        ...state,
        cars: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.BIKES_FETCH_FAILURE:
      return {
        ...state,
        cars: [],
        loading: false,
        error: action.payload,
      };
    case actionTypes.BIKE_FETCH_SUCCESS:
      return {
        ...state,
        car: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.BIKE_FETCH_FAILURE:
      return {
        ...state,
        car: {},
        loading: false,
        error: action.payload,
      };
    case actionTypes.BIKE_CREATE_SUCCESS:
      return {
        ...state,
        cars: [...state.cars, action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.BIKE_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.BIKE_UPDATE_SUCCESS:
      return {
        ...state,
        cars: state.cars.map((car) => {
          if (car.id === action.payload.id) {
            return action.payload;
          }
          return car;
        }),
        loading: false,
        error: null,
      };
    case actionTypes.BIKE_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.BIKE_DELETE_SUCCESS:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload.id),
        loading: false,
        error: null,
      };
    case actionTypes.BIKE_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
