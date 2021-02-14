import axiosInstance from "../../../helpers/axiosInstance";
import {GET_MAINTENANCES_ERROR, GET_MAINTENANCES_SUCCESS} from "../../../constants/actions";

export default (history,id) => async (dispatch) => {
  try {
    const response = await axiosInstance(history).get(`/api/v1/maintenances/vehicles/${id}`)
    const maintenances = response.data.data;
    dispatch({type: GET_MAINTENANCES_SUCCESS, payload: maintenances})
  } catch (e) {
    dispatch({type: GET_MAINTENANCES_ERROR})
  }
}