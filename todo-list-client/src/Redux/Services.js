import {
  getMeAction,
  showLoadingAction,
  showErrorAction,
  hiddenLoadingAction,
  hiddenErrorAction,
} from "./Actions/Auth-action";
import { authServices } from "../Http/Auth-services";

export const getMeReduxServices = () => {
  return async (dispatch) => {
    dispatch(showLoadingAction());
    try {
      const res = await authServices.getMe();
      dispatch(getMeAction(res.data));
      dispatch(hiddenLoadingAction());
      dispatch(hiddenErrorAction());
    } catch (e) {
      console.log(e);
      dispatch(showErrorAction());
      dispatch(hiddenLoadingAction());
    }
  };
};
