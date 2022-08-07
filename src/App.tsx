import React from 'react';
import { Router, Route ,HashRouter} from "react-router-dom";
import Home from './pages/Home';
import ReportStudies from './pages/ReportStudies';
import Articles from './pages/Articles';
import Article from './pages/Article';
import { createMemoryHistory } from "history";

function App() {
  const history = createMemoryHistory();

  return (

    <Router history={history}>
      <Route>
        <Route exact path='/home' render={() => <Home />} />
        <Route path='/reports_and_studies' render={() => <ReportStudies />} />
        <Route path='/articles' render={() => <Articles />} />
        <Route path='/article/:id' render={() => <Article />} />
      </Route>
    </Router>

  );
}

export default App
