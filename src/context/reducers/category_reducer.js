import {
  GET_VEHICLE_CATEGORIES_BEGIN,
  GET_VEHICLE_CATEGORIES_ERROR,
  GET_VEHICLE_CATEGORIES_SUCCESS
} from "../../constants/actions";

const category_reducer = (state, action) => {
  if (action.type === GET_VEHICLE_CATEGORIES_BEGIN){
    return {
      ...state,
      }
    }

  if (action.type === GET_VEHICLE_CATEGORIES_SUCCESS){
    return {
      ...state,
      listCategories: {
        ...state.listCategories,
        categories: action.payload,
        categoriesError: false,
        alerts: []
      }
    }
  }

  if (action.type === GET_VEHICLE_CATEGORIES_ERROR){
    return {
      ...state,
      listCategories: {
        ...state.listCategories,
        categories: [],
        alerts: action.payload,
        categoriesError: true
      }
    }
  }

  return state;
}

export default category_reducer;