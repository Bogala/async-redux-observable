import { ActionsObservable } from 'redux-observable';
import 'rxjs/Rx';
import * as example from './user.epics';
import { Observable } from 'rxjs/Observable';

const successResult = {
    'login': 'Bogala',
    'name': 'Benoit Fontaine',
    'company': 'AXA',
    'blog': 'http://benoitfontaine.net/',
    'created_at': '2014-01-02T17:58:53Z',
    'updated_at': '2017-11-21T21:09:40Z'
};

describe('loadUserEpic', () => {

    // done: see https://facebook.github.io/jest/docs/asynchronous.html
    it('dispatches a result action when the user is loaded', (done) => {

        const dependencies = {
            getJSON: url => Observable.of(successResult)
        };
        
        const action$ = ActionsObservable.of(example.fetchUser(successResult.login));
        const expectedOutputActions = example.fetchUserFulfilled(successResult);

        example.fetchUserEpic(action$, null, dependencies).subscribe(actionReceived => {
            expect((actionReceived as any).type).toBe(expectedOutputActions.type);
            done();
        });

    });

    it('dispatches an error action when ajax fails', (done) => {

        const errorMessage = 'Failed Ajax Call';

        const dependencies = {
            getJSON: url => Observable.throw(new Error(errorMessage))
        };

        const action$ = ActionsObservable.of(example.fetchUser(successResult.login));
        const expectedOutputActions = example.fetchUserError(`An error occurred: ${errorMessage}`);

        example.fetchUserEpic(action$, null, dependencies).subscribe(actionReceived => {
            expect((actionReceived as any).type).toBe(expectedOutputActions.type);
            expect((actionReceived as any).message).toBe(
                expectedOutputActions.message);
            done();
        });

    });

});