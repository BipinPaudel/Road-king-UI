import axiosInstance from "../../../helpers/axiosInstance";
import {GET_VEHICLES_ERROR, GET_VEHICLES_SUCCESS} from "../../../actions";

export default (history) => async (dispatch) => {
  try {
    const response = await axiosInstance(history).get('/api/v1/vehicles');
    const vehicles = response.data.data;
    dispatch({type: GET_VEHICLES_SUCCESS, payload: vehicles })
  } catch (error){
    dispatch({type:GET_VEHICLES_ERROR})
  }
}