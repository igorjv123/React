import 'bulma/css/bulma.css'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/reducers';
import history from './history';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default () => {
    const middleware = [
        sagaMiddleware,
        routerMiddleware(history)
    ];

    const store = createStore(
        connectRouter(history)(rootReducer),
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );

    sagaMiddleware.run(rootSaga);
    return store;
}