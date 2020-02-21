import * as actions from './Actions'

export function fetchPeople() {
  return dispatch => {
    return fetch('http://localhost:3000/api/people').
      then(response => response.json(),
            error => console.log('An error occurred.', error)).
      then(json => dispatch(actions.receivePeople(json)));
  }
}

export function fetchCounts() {
  return dispatch => {
    return fetch('http://localhost:3000/api/people/frequencyCount').
      then(response => response.json(),
            error => console.log('An error occurred.', error)).
      then(json => dispatch(actions.receiveCounts(json)));
  }
}