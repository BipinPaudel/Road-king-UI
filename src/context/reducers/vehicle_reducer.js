import {
  GET_VEHICLES_BEGIN,
  GET_VEHICLES_SUCCESS,
  GET_VEHICLES_ERROR, GET_SINGLE_VEHICLE_BEGIN, GET_SINGLE_VEHICLE_SUCCESS
} from '../../actions';

const vehicle_reducer = (state, action) => {
  if (action.type === GET_VEHICLES_ERROR){
    return {
      ...state,
      vehicles: {
        ...state.vehicles,
        vehiclesError:true,
      },
    }
  }

  if (action.type === GET_VEHICLES_SUCCESS){
    return {
      ...state,
      vehicles: {
        ...state.vehicles,
        vehicles:action.payload,
        vehiclesError:false,
      },
    }
  }

  if (action.type === GET_SINGLE_VEHICLE_BEGIN){
    return {
      ...state,
    }
  }

  if (action.type === GET_SINGLE_VEHICLE_SUCCESS){
    return {
      ...state,
      vehicle: action.payload
    }
  }

  return {...state, vehicles: action.payload}
}

export default vehicle_reducer