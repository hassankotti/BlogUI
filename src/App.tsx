import React from 'react';
import { Route, Router, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import ReportStudies from './pages/ReportStudies';
import Articles from './pages/Articles';
import Article from './pages/Article';
import { createBrowserHistory } from 'history';
function App() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter basename='/BlogUI'>
      <Route>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/home' render={() => <Home />} />
        <Route path='/reports_and_studies' render={() => <ReportStudies />} />
        <Route path='/articles' render={() => <Articles />} />
        <Route path='/article/:id' render={() => <Article />} />
      </Route>
    </BrowserRouter>

  );
}

export default App
