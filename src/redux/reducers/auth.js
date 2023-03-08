import { ACTION_TYPES } from "../actionTypes";

// ** Initial State
const initialState = {
  isUserLoggedIn: false,
  userDate: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        isUserLoggedIn: true,
        userData: action.data.user,
      };
    default:
      return state;
  }
};

export default authReducer;
