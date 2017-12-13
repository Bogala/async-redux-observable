import { ActionsObservable } from 'redux-observable';
import { AjaxError } from 'rxjs/Rx';
import { FETCH_USER, FETCH_USER_ERROR, FETCH_USER_FULFILLED } from './user.actions';

export interface ICustomAjaxError {
  type: string;
  message: string;
}

export const fetchUser = username => ({ type: FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });
export const fetchUserError = (message: string): ICustomAjaxError => ({ type: FETCH_USER_ERROR, message });

// tslint:disable-next-line:no-shadowed-variable
export const fetchUserEpic = (action$: ActionsObservable<any>, store, { getJSON }) =>
  action$.ofType(FETCH_USER)
    .mergeMap(action =>
      getJSON(`https://api.github.com/users/${action.payload}`)
        .map(response => fetchUserFulfilled(response))
        .catch((error: AjaxError): ActionsObservable<ICustomAjaxError> =>
          ActionsObservable.of(fetchUserError(
            `An error occurred: ${error.message}`
          )))
    );