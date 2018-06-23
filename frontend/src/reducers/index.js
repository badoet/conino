import { combineReducers } from 'redux';

import { reducer as PatientReducer } from './PatientRedux'

const appReducer = combineReducers({
  patient: PatientReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
