import {
  ADD_MAINTENANCE_BEGIN,
  ADD_MAINTENANCE_ERROR,
  ADD_MAINTENANCE_SUCCESS, CLEAR_ALERTS, DELETE_MAINTENANCE_ERROR,
  DELETE_MAINTENANCE_SUCCESS,
  GET_MAINTENANCES_ERROR,
  GET_MAINTENANCES_SUCCESS, UPDATE_MAINTENANCE_BEGIN, UPDATE_MAINTENANCE_ERROR, UPDATE_MAINTENANCE_SUCCESS
} from "../../constants/actions";

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
      }
    }
  }

  if (action.type === ADD_MAINTENANCE_BEGIN){
    return {
      ...state,
      addMaintenance: {
        ...state.addMaintenance,
        loading: true,
        errors: [],
      }
    }
  }


  if(action.type === ADD_MAINTENANCE_SUCCESS){
    return {
      ...state,
      maintenances: {
        ...state.maintenances,
        maintenances: [action.payload, ...state.maintenances.maintenances],
      },
      addMaintenance: {
        loading: false,
        errors: [],
        maintenance: action.payload,
      }
    }
  }

  if (action.type === ADD_MAINTENANCE_ERROR){
    return {
      ...state,
      addMaintenance: {
        ...state.addMaintenance,
        loading: false,
        errors: action.payload,
        maintenance: null
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

  if (action.type === UPDATE_MAINTENANCE_BEGIN){
    return {
      ...state,
      updateMaintenance: {
        ...state.updateMaintenance,
        loading: true,
        errors: []
      }
    }
  }
  if (action.type === UPDATE_MAINTENANCE_ERROR){
    return {
      ...state,
      updateMaintenance: {
        ...state.updateMaintenance,
        loading: false,
        errors: action.payload
      }
    }
  }

  if (action.type === UPDATE_MAINTENANCE_SUCCESS){
    return {
      ...state,
      updateMaintenance: {
        ...state.updateMaintenance,
        errors: [],
        loading: false,
      },
      maintenances: {
        ...state.maintenances,
        maintenances: state.maintenances.maintenances.map(maint => {
          if (action.payload.id === maint.id){
            return action.payload
          } else{
            return maint;
          }
        })
      },
    }
  }
  if (action.type === CLEAR_ALERTS){
    return {
      ...state,
      addMaintenance: {
        ...state.addMaintenance,
        errors: []
      },
      updateMaintenance: {
        ...state.updateMaintenance,
        errors: []
      }
    }
  }
}

export default maintenance_reducer;