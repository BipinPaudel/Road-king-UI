import {
  ADD_NOTIFICATION_BEGIN, ADD_NOTIFICATION_ERROR,
  ADD_NOTIFICATION_SUCCESS, CLEAR_ALERTS,
  DELETE_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_BEGIN,
  GET_NOTIFICATION_ERROR,
  GET_NOTIFICATION_SUCCESS, UPDATE_NOTIFICATION_BEGIN, UPDATE_NOTIFICATION_ERROR, UPDATE_NOTIFICATION_SUCCESS
} from "../../constants/actions";

const notification_reducer = (state, action) => {
  if (action.type === GET_NOTIFICATION_BEGIN) {
    return {
      ...state,
    }
  } else if (action.type === GET_NOTIFICATION_SUCCESS) {
    return {
      ...state,
      notifications: action.payload,
    }
  } else if (action.type === GET_NOTIFICATION_ERROR) {
    return {
      ...state
    }
  } else if (action.type === DELETE_NOTIFICATION_SUCCESS) {
    return {
      ...state,
      notifications: []
    }
  } else if (action.type === ADD_NOTIFICATION_BEGIN) {
    return {
      ...state,
      addNotification: {
        ...state.addNotification,
        loading: true,
        errors: []
      }
    }
  } else if (action.type === ADD_NOTIFICATION_SUCCESS) {
    return {
      ...state,
      notifications: [...state.notifications, action.payload],
      addNotification: {
        ...state.addNotification,
        loading: false,
        errors: []
      }
    }
  } else if (action.type === ADD_NOTIFICATION_ERROR) {
    return {
      ...state,
      notifications: [],
      addNotification: {
        ...state.addNotification,
        loading: false,
        errors: action.payload
      }
    }

  } else if(action.type === UPDATE_NOTIFICATION_BEGIN){
    return {
      ...state,
      updateNotification: {
        ...state.updateNotification,
        loading: true,
        errors: []
      }
    }
  }

  else if (action.type === UPDATE_NOTIFICATION_SUCCESS) {
    return {
      ...state,
      updateNotification: {
        ...state.updateNotification,
        loading: false,
        errors: []
      },
      notifications: state.notifications.map(notification => {
        if (action.payload.id === notification.id){
          return action.payload;
        } else {
          return notification;
        }
      })
    }
  } else if(action.type === UPDATE_NOTIFICATION_ERROR){
      return {
        ...state,
        updateNotification: {
          ...state.updateNotification,
          loading: false,
          errors: action.payload
        }
      }
  }

  else if(action.type === CLEAR_ALERTS){
    return {
      ...state,
      addNotification: {
        ...state.addNotification,
        errors: []
      },
      updateNotification: {
        ...state.updateNotification,
        errors: []
      }
    }
  }
  return state;
}

export default notification_reducer;