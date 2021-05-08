import axiosInstance from "../../../helpers/axiosInstance";
import {GET_VEHICLE_CATEGORIES_ERROR, GET_VEHICLE_CATEGORIES_SUCCESS} from "../../../constants/actions";

export default (history) => async (dispatch) => {
  try{
    const response = await axiosInstance(history).get('/api/v1/categories');
    const categories = response.data.data;
    dispatch({type: GET_VEHICLE_CATEGORIES_SUCCESS, payload: categories});
  } catch (error){
    dispatch({type: GET_VEHICLE_CATEGORIES_ERROR})
  }
}