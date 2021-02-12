import { Types } from "../Constants/ActionTypes";

export const ActionCreators = {
  login: (user) => ({ type: Types.LOGIN, payload: { user } }),
  logout: (user) => ({ type: Types.LOGOUT, payload: { user } }),
};
