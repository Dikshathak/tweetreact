import {combineReducers} from 'redux';
import firstReducer from './reduer/firstReducer';
import getReducer from './reduer/getReducer';
const rootReducer=combineReducers({
firstReducer:firstReducer,
getReducer:getReducer
})

export default rootReducer;