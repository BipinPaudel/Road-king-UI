import axiosInstance from "../../../helpers/axiosInstance";
import {ADD_NOTIFICATION_ERROR, ADD_NOTIFICATION_SUCCESS} from "../../../constants/actions";

export default ({vehicle_id, km, day}) => async (dispatch) => {
  try {
    const response = await axiosInstance().post('/api/v1/notifications',
        {vehicle_id, km, day})

    const notification = response.data.data;
    dispatch({type: ADD_NOTIFICATION_SUCCESS, payload: notification});
  } catch (err){
    dispatch({type: ADD_NOTIFICATION_ERROR})
  }
}