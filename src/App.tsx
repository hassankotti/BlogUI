import './App.css'
import Home from './pages/Home';
import { Router, Route } from "react-router-dom";
import ReportStudies from './pages/ReportStudies';
import Articles from './pages/Articles';
import React from 'react';
import { createMemoryHistory } from "history";

function App() {
  const history = createMemoryHistory();

  return (
   
    <Router history={history}>
        <Route>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/home' render={() => <Home />} />
          <Route path='/reports_and_studies' render={() => <ReportStudies />} />
          <Route path='/articles' render={() => <Articles />} />
        </Route>
      </Router>

  );
}

export default App
