import axiosInstance from "../../../helpers/axiosInstance";
import {DELETE_NOTIFICATION_ERROR, DELETE_NOTIFICATION_SUCCESS} from "../../../constants/actions";

export default (id) => async (dispatch) => {
  try {
    const response = await axiosInstance().delete(`/api/v1/notifications/${id}`)
    dispatch({type: DELETE_NOTIFICATION_SUCCESS});
  } catch (err){
    dispatch({type: DELETE_NOTIFICATION_ERROR})
  }
}
