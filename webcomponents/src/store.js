import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'; // Add-on you might want
import logger from 'redux-logger'; // Add-on you might want
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const userReducer = (state = {...initialState.loggedUser}, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const reducers = combineReducers({
    loggedUser: userReducer
})

export const configureStore = (preloadedState) =>
    createStore(reducers, composeEnhancer(applyMiddleware(thunk, logger)))

