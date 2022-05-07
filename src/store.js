import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
// Reducers
import reducer from './Reducer/Reducer';
// Middlewares
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// Root Reducer
const rootReducer = combineReducers({
  users: reducer,
});
// Store
export const store = createStore(reducer, applyMiddleware(thunk));
