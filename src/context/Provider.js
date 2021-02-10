import React, {createContext,useReducer} from 'react';
import auth from "./reducers/auth_reducer";
import vehicle from "./reducers/vehicle_reducer";
import authInitialState from "./initialstates/authInitialState";
import vehiclesInitialState from "./initialstates/vehiclesInitialState";

export const GlobalContext = createContext({});
export const GlobalProvider= ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState)
  const [vehiclesState, vehiclesDispatch] = useReducer(vehicle,vehiclesInitialState);
  return (<GlobalContext.Provider value={{authState,authDispatch,vehiclesState,vehiclesDispatch}}>
    {children}
  </GlobalContext.Provider>)
};