import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { PeopleReducer } from './PeopleReducer'
import { CountsReducer } from './CountsReducer'
import { DuplicatesReducer } from './DuplicatesReducer'

const Reducers = combineReducers({
  router: routerReducer,
  people: PeopleReducer,
  counts: CountsReducer,
  duplicates: DuplicatesReducer
});

export default Reducers