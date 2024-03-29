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
  RESERVE_CREATE_SUCCESS: 'RESERVE_CREATE_SUCCESS',
  RESERVE_CREATE_FAILURE: 'RESERVE_CREATE_FAILURE',
};

const initialState = {
  bikes: [],
  bike: {},
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BIKES_FETCH_SUCCESS:
      return {
        ...state,
        bikes: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.BIKES_FETCH_FAILURE:
      return {
        ...state,
        bikes: [],
        loading: false,
        error: action.payload,
      };
    case actionTypes.BIKE_FETCH_SUCCESS:
      return {
        ...state,
        bike: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.BIKE_FETCH_FAILURE:
      return {
        ...state,
        bike: {},
        loading: false,
        error: action.payload,
      };
    case actionTypes.BIKE_CREATE_SUCCESS:
      return {
        ...state,
        bikes: [...state.bikes, action.payload],
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
        bikes: state.bikes.map((bike) => {
          if (bike.id === action.payload.id) {
            return action.payload;
          }
          return bike;
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
        bikes: state.bikes.filter((bike) => bike.id !== action.payload),
        loading: false,
        error: null,
      };
    case actionTypes.BIKE_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.RESERVE_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case actionTypes.RESERVE_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
