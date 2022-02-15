import messageReducer from './message/message';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    messages: messageReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
