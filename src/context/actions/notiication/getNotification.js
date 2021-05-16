import {GET_NOTIFICATION_BEGIN, GET_NOTIFICATION_ERROR, GET_NOTIFICATION_SUCCESS} from "../../../constants/actions";
import axiosInstance from "../../../helpers/axiosInstance";

export default (history, vehicle_id) => async (dispatch) => {
  dispatch({type: GET_NOTIFICATION_BEGIN})
  try {
    const response = await axiosInstance(history).get(`/api/v1/notifications/vehicles/${vehicle_id}`);
    const notification = response.data.data;
    dispatch({type: GET_NOTIFICATION_SUCCESS, payload: notification});
  } catch (error){
    dispatch({type: GET_NOTIFICATION_ERROR})
  }
}