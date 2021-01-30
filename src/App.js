import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";
import routes from "./routes";
import isAuthenticated from "./utils/isAuthenticated";
import {GlobalProvider} from "./context/Provider";

const RenderRoute = (route) => {
  const history = useHistory();
  document.title = route.title || 'Vehicle Tracker';
  if (route.needsAuth && !isAuthenticated()) {
    history.push('/auth/login');
  } else {
    return <Route
        path={route.path} exact
        render={(props) => <route.component {...props}/>}
    />
  }
}

function App() {
  return (
      <GlobalProvider>
        <Router>
          <Switch>
            {routes.map((route, index) => (
                <RenderRoute {...route} key={index}/>
            ))}
          </Switch>
        </Router>
      </GlobalProvider>

  );
}

export default App;
