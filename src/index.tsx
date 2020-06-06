import './index.css';

import * as Sentry from '@sentry/browser';
import * as serviceWorker from './serviceWorker';
import * as store from './mobx';

import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router'; 
import { Router } from 'react-router-dom';
import Routes from './routes';

import { router } from './mobx';

import 'semantic-ui-css/semantic.min.css';

Sentry.init({dsn: "https://00274bdac85e493c92e8fd7aa54919da@o403749.ingest.sentry.io/5266801"});

const rootElement = document.getElementById('root');
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, router);

ReactDOM.render(
  <React.StrictMode>
  <Provider {...store}>
    <Router history={history}>
      <Routes/>
    </Router>
  </Provider>
  </React.StrictMode>, 
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
