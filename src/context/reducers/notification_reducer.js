import {
  ADD_NOTIFICATION_SUCCESS,
  DELETE_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_BEGIN,
  GET_NOTIFICATION_ERROR,
  GET_NOTIFICATION_SUCCESS, UPDATE_NOTIFICATION_SUCCESS
} from "../../constants/actions";

const notification_reducer = (state, action) => {
  if (action.type === GET_NOTIFICATION_BEGIN) {
    return {
      ...state,
    }
  } else if (action.type === GET_NOTIFICATION_SUCCESS) {
    return {
      ...state,
      notification: action.payload,
    }
  } else if (action.type === GET_NOTIFICATION_ERROR) {
    return {
      ...state
    }
  } else if (action.type === DELETE_NOTIFICATION_SUCCESS){
    return {
      ...state,
      notification: []
    }
  } else if(action.type === ADD_NOTIFICATION_SUCCESS){
    return {
      ...state,
      notification: [action.payload]
    }
  } else if (action.type === UPDATE_NOTIFICATION_SUCCESS){
    return {
      ...state,
      notification: [action.payload]
    }
  }
  return state;
}

export default notification_reducer;