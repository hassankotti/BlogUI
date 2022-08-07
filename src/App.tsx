import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import ReportStudies from './pages/ReportStudies';
import Articles from './pages/Articles';
import Article from './pages/Article';
import { createBrowserHistory } from 'history';
import NotFound from './pages/NotFound';
function App() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter basename='/'>
      <Route>
        <Switch>
          <Route path='/' exact render={() => <Home />} />
          <Route path='/home' exact render={() => <Home />} />
          <Route path='/reports_and_studies' render={() => <ReportStudies />} />
          <Route path='/articles' render={() => <Articles />} />
          <Route path='/article/:id' render={() => <Article />} />
          <Route path='*' render={() => <NotFound />} />
        </Switch>
      </Route>
    </BrowserRouter>

  );
}

export default App
