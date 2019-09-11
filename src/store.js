import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers/root'

const initialState = {
  app: {
    splashAnimationComplete:    false,
    valentineAnimationComplete: false,
    letterAnimationComplete:    false,
    envelopeAnimationComplete:  false,
    submissionCount:            0,
    connectionError:            false,
    step:                       0
  },
  advocacy: {
    activist: {
      email:      '',
      postalCode: ''
    },
    message: '',
    success: 0,
    error:   0,
    source:  ''
  },
  contribution: {
    total:    0,
    error:    false,
    complete: false
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducer, initialState, enhancer)

export {store}
