import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, HashRouter} from 'react-router-dom';

import store from './store';

import App from './containers/App';
import NotFound from './containers/NotFound';

import './index.css';
import logo from './logo.svg';

ReactDOM.render(
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route
            exactly
            pattern='/'
            component={App} />

          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </Provider>
  </div>,
  document.getElementById('root')
);
