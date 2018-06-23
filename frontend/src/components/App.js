import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import { history } from '../utils/historyUtils';
import reducers from '../reducers';
import Config from './config';

import '../../node_modules/normalize.css/normalize.css';
import Home from './home/Home';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Config>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </Config>
        </Router>
      </Provider>
    );
  }
}

export default App;
