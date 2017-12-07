import { ajax } from 'rxjs/observable/dom/ajax';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epic';
import { rootReducer } from './reducer';
import { compose } from 'recompose';

// tslint:disable-next-line:no-any
const composeEnhancers =
    // tslint:disable-next-line:no-any
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: { getJSON: ajax.getJSON }
});

export const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(epicMiddleware))
    );

    return store;
};