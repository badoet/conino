import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import { history } from '../utils/historyUtils';
import reducers from '../reducers';
import Config from './config';

import '../../node_modules/normalize.css/normalize.css';
import TopNav from './TopNav';
import Home from './home/Home';
import FindPatient from './findPatient/FindPatient';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Config>
            <TopNav />
            <Switch>
              <Route path="/start" component={FindPatient} />
              <Route path="/patients/:id" component={Home} />
              <Route path="/" component={Home} />
            </Switch>
          </Config>
        </Router>
      </Provider>
    );
  }
}

export default App;
