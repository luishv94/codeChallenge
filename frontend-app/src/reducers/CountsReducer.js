import { merge } from '../utils'
import { RECEIVE_COUNTS } from '../actions/Constants'

export function CountsReducer(
  state={},
  action
) {
  switch(action.type) {
    case RECEIVE_COUNTS:
      return merge(state, action.counts)
    default:
      return state
  }
}