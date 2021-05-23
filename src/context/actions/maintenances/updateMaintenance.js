import axiosInstance from "../../../helpers/axiosInstance";
import {
  UPDATE_MAINTENANCE_BEGIN, UPDATE_MAINTENANCE_ERROR,
  UPDATE_MAINTENANCE_SUCCESS
} from "../../../constants/actions";

export default ({km, date, price, vehicle_id, description, id}) => async (dispatch) => {
  try {
    dispatch({type: UPDATE_MAINTENANCE_BEGIN})
    const response = await axiosInstance().put(`/api/v1/maintenances/${id}`,
        {km, date, price, vehicle_id, description})
    const maintenances = response.data.data;
    dispatch({type: UPDATE_MAINTENANCE_SUCCESS, payload: maintenances})
  } catch (e) {
    dispatch({type: UPDATE_MAINTENANCE_ERROR, payload: e.response.data.errors})
  }
}