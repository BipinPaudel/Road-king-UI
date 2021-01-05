import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({children, ...rest}) => {

  return(
  <Route {...rest}
         render={() => {
           return true ? children : <Redirect to="/"> </Redirect>
         }}
  />
  )
}
export default PrivateRoute
