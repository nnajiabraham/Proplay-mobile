import firstNamedReducer from './reducers';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  firstNamedReducer,
});

export default rootReducer;
