import React from 'react'
import { createBrowserHistory, createMemoryHistory } from "history";
import Articles from './pages/Articles';
import Article from './pages/Article';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ReportStudies from './pages/ReportStudies';

const routerHistory = createBrowserHistory()
const history = createMemoryHistory();

const router = {
    history: routerHistory,
    routes: [
        {
            path: '/home',
            component: Home,
            exact : true
        },
        {
            path: '/articles',
            component: Articles,
            exact : false
        },
        {
            path: '/article/:id',
            component: Article,
            exact : false
        },
        {
            path: '/reports_and_studies',
            component: ReportStudies,
            exact : false
        },
       /* {
            path: '*',
            component: NotFound,
            exact : false
        },*/
    ]
}

export default router