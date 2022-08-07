import React from 'react'
import { createBrowserHistory, createMemoryHistory } from "history";
import Articles from './pages/Articles';
import Article from './pages/Article';
import Home from './pages/Home';
import ReportStudies from './pages/ReportStudies';


const history = createMemoryHistory();// process.env.NODE_ENV == 'development' ?: createBrowserHistory();

const router = {
    history: history,
    routes: [
        {
            path: '/home',
            component: Home,
            exact: true
        },
        {
            path: '/articles',
            component: Articles,
            exact: false
        },
        {
            path: '/article/:id',
            component: Article,
            exact: false
        },
        {
            path: '/reports_and_studies',
            component: ReportStudies,
            exact: false
        },
    ]
}

export default router