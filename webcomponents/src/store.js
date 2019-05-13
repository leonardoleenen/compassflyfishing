import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'; // Add-on you might want
import logger from 'redux-logger'; // Add-on you might want
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const initialState = {
  loggedUser: null,
  activeProcess: {
    processID: null,
    payload: {}
  }

}
export const userReducer = (state = { ...initialState.loggedUser }, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const processReducer = (state = { ...initialState.activeProcess }, action) => {
  switch (action.type) {
    case 'OPEN PROGRAM CARD':
      return { ...state, ...action.payload }
    case 'PROGRAM LIST':
      return { ...state, ...action.payload }
    case 'OPEN PRE RESERVE':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const reducers = combineReducers({
  loggedUser: userReducer,
  activeProcess: processReducer
})

export const configureStore = (preloadedState) =>
  createStore(reducers, composeEnhancer(applyMiddleware(thunk, logger)))

