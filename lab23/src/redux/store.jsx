import {createStore, applyMiddleware} from 'redux'
import profileReducer from './reducer'
import {logger} from 'redux-logger'

const store = createStore(profileReducer, applyMiddleware(logger))

export default store;