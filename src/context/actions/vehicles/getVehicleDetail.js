import axiosInstance from "../../../helpers/axiosInstance";
import {GET_SINGLE_VEHICLE_BEGIN, GET_SINGLE_VEHICLE_ERROR, GET_SINGLE_VEHICLE_SUCCESS} from "../../../constants/actions";

export default (history, id) => async (dispatch) => {
  dispatch({type:GET_SINGLE_VEHICLE_BEGIN})
  try {
    const response = await axiosInstance(history).get(`/api/v1/vehicles/${id}`);
    const vehicle = response.data.data;
    console.log('my vehicle ',vehicle);
    dispatch({type: GET_SINGLE_VEHICLE_SUCCESS, payload: vehicle})
  } catch (error) {
    dispatch({
      type: GET_SINGLE_VEHICLE_ERROR,
      payload: error.response? error.response.data : "COULD NOT CONNECT"
    })
  }
}