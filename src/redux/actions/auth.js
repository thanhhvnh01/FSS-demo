import { STORAGE_KEY } from "@chakra-ui/color-mode/dist/storage-manager";
import { ACTION_TYPES } from "../actionTypes";

export const loginAC = (data) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.LOGIN,
      data,
    });

    //** Add userInfo to localStorage */
    Storage.setItem(STORAGE_KEY.userData, data);
  };
};
