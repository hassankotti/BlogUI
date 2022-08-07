import { Router, Route,Switch } from "react-router-dom";
import React from 'react';
import router from './Routes'
import NotFound from "./pages/NotFound";
function App() {

  return (

    <Router history={router.history}>
      <Switch>
        {
          router.routes.map((route, index) => (
            <Route key={index} exact={route.exact} path={route.path} component={route.component} />
          ))
        }
        <Route component={NotFound} />
      </Switch>
    </Router>

  );
}

export default App
