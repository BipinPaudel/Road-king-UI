import {ADD_MAINTENANCE_SUCCESS, GET_MAINTENANCES_ERROR, GET_MAINTENANCES_SUCCESS} from "../../actions";

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
}

export default maintenance_reducer;