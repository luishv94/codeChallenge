import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { PeopleReducer } from './PeopleReducer'
import { CountsReducer } from './CountsReducer'

const Reducers = combineReducers({
  router: routerReducer,
  people: PeopleReducer,
  counts: CountsReducer
});

export default Reducers