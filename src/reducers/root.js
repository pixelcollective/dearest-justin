import {combineReducers} from 'redux'
import {app} from './app'
import {advocacy} from './advocacy'
import {contribution} from './contribution'

export default combineReducers({
  advocacy:     advocacy,
  app:          app,
  contribution: contribution
})
