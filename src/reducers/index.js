import {combineReducers} from 'redux';
import wrestlers from './wrestlerReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  wrestlers,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
