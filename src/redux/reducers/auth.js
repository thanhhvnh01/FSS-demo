import { ACTION_TYPES } from "../actionTypes";

// ** Initial State
const initialState = {
  isUserLoggedIn: false,
  userData: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        isUserLoggedIn: true,
        userData: action.data.user,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
        userData: null,
      };
    default:
      return state;
  }
};

export default authReducer;
