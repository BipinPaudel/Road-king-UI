import React, {createContext, useReducer} from 'react';
import auth from "./reducers/auth_reducer";
import vehicle from "./reducers/vehicle_reducer";
import category from './reducers/category_reducer';
import notification from './reducers/notification_reducer';
import authInitialState from "./initialstates/authInitialState";
import vehiclesInitialState from "./initialstates/vehiclesInitialState";
import maintenanceInitialState from "./initialstates/maintenanceInitialState";
import categoryInitialState from "./initialstates/categoriesInitialState";
import notificationInitialState from "./initialstates/notificationInitialState";
import maintenance from "./reducers/maintenance_reducer";

export const GlobalContext = createContext({});
export const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState)
  const [vehiclesState, vehiclesDispatch] = useReducer(vehicle, vehiclesInitialState);
  const [maintenanceState, maintenanceDispatch] = useReducer(maintenance, maintenanceInitialState);
  const [categoryState, categoryDispatch] = useReducer(category, categoryInitialState);
  const [notificationState, notificationDispatch] = useReducer(notification, notificationInitialState);
  return (<GlobalContext.Provider value={{
    authState,
    authDispatch,
    vehiclesState,
    vehiclesDispatch,
    maintenanceState,
    maintenanceDispatch,
    categoryState,
    categoryDispatch,
    notificationState,
    notificationDispatch
  }}>
    {children}
  </GlobalContext.Provider>)
};