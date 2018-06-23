import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import { history } from '../utils/historyUtils';
import reducers from '../reducers';
import Config from './config';

import TopNav from './topNav/TopNav';
import Home from './home/Home';
import FindPatient from './findPatient/findPatient';
// import AddPrescriptions from './addPrescriptions/AddPrescriptions';
// import ViewAllergies from './viewAllergies/ViewAllergies';
// import ViewPrescribedAntibiotics from './viewPrescribedAntibiotics/ViewPrescribedAntibiotics';

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
              {/*<Route path="/add-prescriptions" component={AddPrescriptions} />
              <Route path="/view-allergies" component={ViewAllergies} />
              <Route path="/view-prescribed-antibiotics" component={ViewPrescribedAntibiotics} />*/}
              <Route path="/patients/:id" component={Home} />
              <Route path="/" component={FindPatient} />
            </Switch>
          </Config>
        </Router>
      </Provider>
    );
  }
}

export default App;
