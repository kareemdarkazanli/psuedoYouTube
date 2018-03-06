import React from 'react';
import App from '../src/App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../src/store/reducer';
import thunk from 'redux-thunk';

const composeEnhancers = compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

const indexPage = () => (
    <Provider store={store}>
            <App/>
    </Provider>
);

export default indexPage;