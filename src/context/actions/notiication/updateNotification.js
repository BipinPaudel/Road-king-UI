import {
  DELETE_NOTIFICATION_ERROR,
  UPDATE_NOTIFICATION_ERROR,
  UPDATE_NOTIFICATION_SUCCESS
} from "../../../constants/actions";
import axiosInstance from "../../../helpers/axiosInstance";

export default ({vehicle_id, km, day, id}) => async (dispatch) => {
  try {
    const response = await axiosInstance().put(`/api/v1/notifications/${id}`,
        {vehicle_id, km, day})
    const notification = response.data.data
    dispatch({type: UPDATE_NOTIFICATION_SUCCESS, payload: notification})
  } catch (err) {
    dispatch({type: UPDATE_NOTIFICATION_ERROR})
  }
}