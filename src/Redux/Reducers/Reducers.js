import { Types } from "../Constants/ActionTypes";
import axios from "axios";

const initialState = {
  user: {
    userID: "",
    userName: "",
    password: "",
    role: "",
    accessToken: "",
    refreshToken: "",
    firstName: "",
    lastName: "",
    statusId: null,
  },
  formSubmitted: false,
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      //   console.log("login", action.payload);
      var response = {};
      axios({
        method: "post",
        url: "https://coinbit-backend.com/api/Account/login",
        data: {
          username: action.payload.UserName,
          password: action.payload.Password,
        },
        headers: {
          "content-type": "application/json",
        },
      }).then((Response) => {
        response = Response.data;
        state.user.userName = response.userName;
        state.user.password = action.payload.Password;
        state.user.accessToken = response.accessToken;
        state.user.role = response.role;
        state.user.statusId = response.statusId;
        state.formSubmitted = true;
      });

      return {
        ...state,
      };

    case Types.LOGOUT:
      return {
        ...state,
        state: initialState,
      };
    default:
      return state;
  }
};

export default Reducers;
