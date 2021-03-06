import {
  GET_VEHICLES_BEGIN,
  GET_VEHICLES_SUCCESS,
  GET_VEHICLES_ERROR,
  GET_SINGLE_VEHICLE_BEGIN,
  GET_SINGLE_VEHICLE_SUCCESS,
  ADD_VEHICLES_SUCCESS,
  ADD_VEHICLES_BEGIN,
  DELETE_VEHICLE_SUCCESS,
  DELETE_VEHICLE_BEGIN,
  UPDATE_VEHICLES_BEGIN,
  UPDATE_VEHICLES_SUCCESS,
  ADD_VEHICLES_ERROR,
  CLEAR_ALERTS, UPDATE_VEHICLES_ERROR
} from '../../constants/actions';

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
  if (action.type === ADD_VEHICLES_SUCCESS){
    return {
      ...state,
      vehicles:{
        ...state.vehicles,
        vehicles: [...state.vehicles.vehicles, action.payload]
      },
      addVehicle:{
        ...state.addVehicle,
        loading: false,
        vehicle: action.payload
      }
    }
  }

  if (action.type === ADD_VEHICLES_BEGIN){
    return {
      ...state,
      addVehicle:{
        ...state.addVehicle,
        loading: true,
        errors: []
      }
    }
  }
  if (action.type === ADD_VEHICLES_ERROR){
    return {
      ...state,
      addVehicle:{
        ...state.addVehicle,
        errors: action.payload,
        loading: false
      }
    }
  }
  if (action.type === DELETE_VEHICLE_BEGIN){
    return {
      ...state,
      deleteVehicle:{
        ...state.deleteVehicle,
        loading: true
      }
    }
  }
  if (action.type === DELETE_VEHICLE_SUCCESS){
    return {
      ...state,
      vehicles: {
        ...state.vehicles,
        vehicles: state.vehicles.vehicles.filter(v => v.id !== action.payload)
      },
      deleteVehicle:{
        ...state.deleteVehicle,
        loading: false
      }
    }
  }

  if (action.type === UPDATE_VEHICLES_BEGIN){
    return {
      ...state,
      updateVehicle:{
        ...state.updateVehicle,
        vehicle: null,
        loading: true,
        errors: [],
      }
    }
  }

  if (action.type === UPDATE_VEHICLES_SUCCESS){
    return {
      ...state,
      updateVehicle:{
        ...state.updateVehicle,
        loading: false,
        vehicle: action.payload,
        errors: [],
      }
    }
  }

  if (action.type === UPDATE_VEHICLES_ERROR){
    return {
      ...state,
      updateVehicle: {
        ...state.updateVehicle,
        loading: false,
        errors: action.payload
      }
    }
  }

  if (action.type === CLEAR_ALERTS){
    return {
      ...state,
      addVehicle: {
        ...state.addVehicle,
        errors: [],
        loading: false
      },
      updateVehicle: {
        ...state.updateVehicle,
        errors: [],
        loading: false
      }
    }
  }

  return state
}

export default vehicle_reducer