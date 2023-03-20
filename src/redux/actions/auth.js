import { Storage, STORAGE_KEYS } from "../../utils/storage";
import { ACTION_TYPES } from "../actionTypes";

export const loginAC = (data) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.LOGIN,
      data,
    });

    //** Add userInfo to localStorage */
    Storage.setItem(STORAGE_KEYS.userData, data);
  };
};

export const logoutAC = () => {
  return (dispatch) => {
    dispatch({ type: ACTION_TYPES.LOGOUT });

    Storage.clear(STORAGE_KEYS.userData);
  };
};
