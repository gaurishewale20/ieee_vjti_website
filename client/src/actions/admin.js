import { ADMIN } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (adminData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(adminData);
    dispatch({ type: ADMIN, data });
    router.push("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
