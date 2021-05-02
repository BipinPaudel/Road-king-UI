import axiosInstance from "../../../helpers/axiosInstance";
import {DELETE_VEHICLE_BEGIN, DELETE_VEHICLE_SUCCESS, DELETE_VEHICLE_ERROR} from "../../../constants/actions";

export default (id) => async (dispatch) => {
  try{
    dispatch({type: DELETE_VEHICLE_BEGIN})
    const response = await axiosInstance().delete(`/api/v1/vehicles/${id}`);
    if (response){
      dispatch({type: DELETE_VEHICLE_SUCCESS,payload:id})
    }
  } catch (err){
    dispatch({type:DELETE_VEHICLE_ERROR})
  }
}