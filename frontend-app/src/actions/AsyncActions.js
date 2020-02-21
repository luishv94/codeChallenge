import * as actions from './Actions'

export const creds = { credentials: 'same-origin' };

export function fetchPeople() {
  return dispatch => {
    return fetch('http://localhost:3000/api/people', creds).
      then(response => response.json(),
            error => console.log('An error occurred.', error)).
      then(json => dispatch(actions.receivePeople(json)));
  }
}