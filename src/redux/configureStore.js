import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import peopleReducer from './people/reducer';

const middleWares = [thunkMiddleware];

const appReducer = combineReducers({
  people: peopleReducer,
});

const store = createStore(appReducer, applyMiddleware(...middleWares));

export { store };
