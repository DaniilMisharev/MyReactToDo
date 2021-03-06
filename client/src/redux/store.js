import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import initState from './initState';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
