import axios from 'axios'

export function splashCompleteAnimation() {
  return (dispatch) => {
    dispatch({type: 'SPLASH_ANIMATION_COMPLETE'})
    dispatch(setStep(1))
  }
}
export function letterCompleteAnimation() {
  return {type: 'LETTER_ANIMATION_COMPLETE'}
}
export function valentineCompleteAnimation() {
  return {type: 'VALENTINE_ANIMATION_COMPLETE'}
}
export function envelopeCompleteAnimation() {
  return {type: 'ENVELOPE_ANIMATION_COMPLETE'}
}
export function setSubmissionCount() {
  return (dispatch) => {
    axios.get('https://api.dearestjustin.org/action/count')
      .then(response => {
        if(response.data < 1000 || response.data === null)
          dispatch(setConnectionError())
        else
          dispatch(setSubmissionState(response.data))
      })
  }
}
function setStep(step) {
  return {
    type: 'STEP',
    step: step
  }
}
function setSubmissionState(count) {
  return {
    type:            'SET_SUBMISSION_COUNT',
    submissionCount: count
  }
}
function setConnectionError() {
  return {
    type:            'CONNECTION_ERROR',
    connectionError: 'Whoops! There seems to be a problem connecting to the internet!'
  }
}
