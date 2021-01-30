import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useAuthContext} from "../context/auth_context";

const PrivateRoute = ({children, ...rest}) => {

  const {loginInfo} = useAuthContext();

  return(
  <Route {...rest}
         render={() => {
           return loginInfo ? children : <Redirect to="/"> </Redirect>
         }}
  />
  )
}
export default PrivateRoute
