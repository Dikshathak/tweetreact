import {applyMiddleware, createStore} from 'redux';
import rootReducer from './RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import apiMiddleware  from './api-middleware';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(apiMiddleware(),typeof window != 'undefined' && reduxImmutableStateInvariant()) ));
export default store;