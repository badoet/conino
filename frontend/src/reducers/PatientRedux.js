import { createReducer, createActions } from 'reduxsauce'
import immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  selectPatient: ['patient'],
})

export const PatientTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = immutable({
  patient: null,
})

/* ------------- Reducers ------------- */

export const selectPatient = (state, { patient }) => state.merge({ patient })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SELECT_PATIENT]: selectPatient,
})
