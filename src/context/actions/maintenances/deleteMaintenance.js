import axiosInstance from "../../../helpers/axiosInstance";
import {DELETE_MAINTENANCE_ERROR, DELETE_MAINTENANCE_SUCCESS} from "../../../actions";

export default (id) => async (dispatch) => {
  try {
    const response = await axiosInstance().delete(`/api/v1/maintenances/${id}`);
    dispatch({type: DELETE_MAINTENANCE_SUCCESS, payload:id})
  } catch (err){
    dispatch({type: DELETE_MAINTENANCE_ERROR})
  }
}