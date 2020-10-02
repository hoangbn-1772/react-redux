import { combineReducers } from 'redux'
import todos from './todos'
import visibileReducer from './visibileReducers'

export default combineReducers({
    todos,
    visibileReducer
})
