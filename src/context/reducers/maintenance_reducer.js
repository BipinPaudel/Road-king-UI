import {
  ADD_MAINTENANCE_SUCCESS, DELETE_MAINTENANCE_ERROR,
  DELETE_MAINTENANCE_SUCCESS,
  GET_MAINTENANCES_ERROR,
  GET_MAINTENANCES_SUCCESS
} from "../../actions";

const maintenance_reducer = (state, action) => {
  if (action.type === GET_MAINTENANCES_ERROR){
    return {
      ...state,
      maintenances: {
        ...state.maintenances,
        maintenancesError: true,
      }
    }
  }
  if (action.type === GET_MAINTENANCES_SUCCESS){
    return {
      ...state,
      maintenances: {
        ...state.maintenances,
        maintenances: action.payload,
        maintenancesError: false,
      }
    }
  }

  if(action.type === ADD_MAINTENANCE_SUCCESS){
    return {
      ...state,
      maintenances: {
        ...state.maintenances,
        maintenances: [action.payload, ...state.maintenances.maintenances],
        maintenancesError: false,
      },
      addMaintenance: {
        loading: false,
        error: null,
        maintenance: action.payload,
      }
    }
  }

  if (action.type===DELETE_MAINTENANCE_SUCCESS){
    return {
      ...state,
      maintenances: {
        ...state.maintenances,
        maintenances: state.maintenances.maintenances
            .filter(m => m.id !== action.payload)
      }
    }
  }

  if (action.type===DELETE_MAINTENANCE_ERROR){
    return {
      ...state
    }
  }
}

export default maintenance_reducer;