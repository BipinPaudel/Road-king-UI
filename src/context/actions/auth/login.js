import axiosInstance from "../../../helpers/axiosInstance";
import {AUTH_FAILURE, LOGIN_BEGIN, LOGIN_USER} from "../../../constants/actions";

export const login = ({email, password}) => async (dispatch) => {
  try {
    dispatch({type: LOGIN_BEGIN})
    const res = await axiosInstance().post('/api/v1/sign_in', {
      password, email
    })
    localStorage.token = res.data.data.token;
    dispatch({
      type: LOGIN_USER,
      payload: res.data.data
    })
  } catch (err) {
    dispatch({
      type: AUTH_FAILURE,
      payload: err.response ? err.response.data.errors: 'Invalid username or password'
    })
  }
}