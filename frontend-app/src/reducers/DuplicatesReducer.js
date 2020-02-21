import { merge } from '../utils'
import { RECEIVE_DUPLICATES } from '../actions/Constants'

export function DuplicatesReducer(
  state={},
  action
) {
  switch(action.type) {
    case RECEIVE_DUPLICATES:
      return merge(state, action.duplicates)
    default:
      return state
  }
}