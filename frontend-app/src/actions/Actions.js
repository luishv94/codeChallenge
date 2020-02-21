import * as actions from './Constants'

export function receivePeople(people) {
  return {
    type: actions.RECEIVE_PEOPLE,
    people
  }
}

export function receiveCounts(counts) {
  return {
    type: actions.RECEIVE_COUNTS,
    counts
  }
}

export function receiveDuplicates(duplicates) {
  return {
    type: actions.RECEIVE_DUPLICATES,
    duplicates
  }
}