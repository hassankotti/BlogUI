import React from 'react';
import { Route, Router } from "react-router-dom";
import Home from './pages/Home';
import ReportStudies from './pages/ReportStudies';
import Articles from './pages/Articles';
import Article from './pages/Article';
import { createBrowserHistory } from 'history';
function App() {
  const history = createBrowserHistory();
  return (
    <Home />
    // <Router history={history}>
    //   <Route>
    //     <Route exact path='/' render={() => <Home />} />
    //     <Route exact path='/home' render={() => <Home />} />
    //     <Route path='/reports_and_studies' render={() => <ReportStudies />} />
    //     <Route path='/articles' render={() => <Articles />} />
    //     <Route path='/article/:id' render={() => <Article />} />
    //   </Route>
    // </Router>

  );
}

export default App
