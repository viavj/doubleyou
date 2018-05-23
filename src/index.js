import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import UiReducer from './store/reducers/uiReducer'
import DishesReducer from './store/reducers/dishesReducer'
import AuthReducer from './store/reducers/authReducer'

const reducer = combineReducers({
    uiReducer: UiReducer,
    authReducer: AuthReducer,
    dishesReducer: DishesReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
