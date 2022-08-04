import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';
import Articles from './pages/Articles';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import ReportStudies from './pages/ReportStudies';
const Routes = () => {
    return (
        <BrowserRouter basename='/'>
            <Route path="/" component={Home}>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route path='/reports_and_studies' component={ReportStudies} />
                <Route path='/articles' component={Articles} />
            </Route>     
        </BrowserRouter>
    )
}

export default Routes