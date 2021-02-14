import axiosInstance from "../../../helpers/axiosInstance";
import {ADD_MAINTENANCE_BEGIN, ADD_MAINTENANCE_ERROR, ADD_MAINTENANCE_SUCCESS} from "../../../constants/actions";

export default ({km, date, price, vehicle_id, description}) => async (dispatch) => {
  try {
    console.log('this is vehicle id in service ',vehicle_id)
    // dispatch({type: ADD_MAINTENANCE_BEGIN})
    const response = await axiosInstance().post(`/api/v1/maintenances`,
        {km, date, price, vehicle_id, description})
    const maintenances = response.data.data;
    dispatch({type: ADD_MAINTENANCE_SUCCESS, payload: maintenances})
  } catch (e) {
    // dispatch({type: ADD_MAINTENANCE_ERROR})
  }
}