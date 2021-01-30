import axiosInstance from "../../../helpers/axiosInstance";
import {AUTH_FAILURE, LOGIN_USER} from "../../../actions";

export const login = (email, password) => (dispatch) => {
  axiosInstance().post('/api/v1/sign_in', {
    password, email
  })
      .then(res => {
        localStorage.token = res.data.token;
        dispatch({
          type: LOGIN_USER,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: AUTH_FAILURE,
          payload: err.response ? err.response.data: 'COULD NOT CONNECT'
        })
        console.log("e", err)
      })
}