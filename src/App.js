import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Navbar, Footer} from './components';
import {Vehicles,SingleVehicle,PrivateRoute, Auth} from "./pages";

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Auth/>
          </Route>
          <PrivateRoute exact path='/vehicles'>
            <Vehicles/>
          </PrivateRoute>

          <PrivateRoute exact path='/vehicle/:id' children={<SingleVehicle/>}/>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
