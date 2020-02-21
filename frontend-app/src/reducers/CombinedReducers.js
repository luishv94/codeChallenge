import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { PeopleReducer } from './PeopleReducer'

const Reducers = combineReducers({
  router: routerReducer,
  people: PeopleReducer,
});

export default Reducers