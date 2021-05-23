import { SIGNUP_FAILED, SIGNUP_USER} from "../../../constants/actions";
import axiosInstance from "../../../helpers/axiosInstance";

export const register = ({ email,
                           password,
                           confirmPassword: password_confirmation
                         }, history) => async dispatch => {
  dispatch({type: SIGNUP_USER})
  try {
    const response = await axiosInstance().post('/api/v1/sign_up', {
      email,
      password,
      password_confirmation
    })
    const loginInfo = response.data;
    dispatch({type: SIGNUP_USER, payload: loginInfo.data});
    history.push("/vehicles");
  } catch (e) {
    dispatch({type: SIGNUP_FAILED, payload: e.response.data.errors});
  }
}