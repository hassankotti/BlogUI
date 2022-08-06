import { Router, Route } from "react-router-dom";
import React from 'react';
import router from './Routes'
function App() {

  return (

    <Router history={router.history}>
      <Route>
        {
          router.routes.map((route, index) => (
            <Route key={index} exact={route.exact} path={route.path} component={route.component} />
          ))
        }
      </Route>
    </Router>

  );
}

export default App
