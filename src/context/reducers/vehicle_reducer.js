import {
  GET_VEHICLES_BEGIN,
  GET_VEHICLES_SUCCESS,
  GET_VEHICLES_ERROR
} from '../../actions';

const vehicle_reducer = (state, action) => {
  if (action.type === GET_VEHICLES_ERROR){
    return {
      ...state,
      vehicles_error:true
    }
  }

  if (action.type === GET_VEHICLES_SUCCESS){
    return {
      ...state,
      vehicles: action.payload,
      vehicles_error:false,
    }
  }

  return {...state, vehicles: action.payload}
}

export default vehicle_reducer