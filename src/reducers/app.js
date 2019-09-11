export function app(state = [], action) {
  switch (action.type) {
  case 'STEP':
    return {
      ...state,
      step: action.step
    }
  case 'SPLASH_ANIMATION_COMPLETE':
    return {
      ...state,
      splashAnimationComplete: true
    }
  case 'ENVELOPE_ANIMATION_COMPLETE':
    return {
      ...state,
      envelopeAnimationComplete: true
    }
  case 'VALENTINE_ANIMATION_COMPLETE':
    return {
      ...state,
      valentineAnimationComplete: true
    }
  case 'LETTER_ANIMATION_COMPLETE':
    return {
      ...state,
      letterAnimationComplete: true
    }
  case 'SET_SUBMISSION_COUNT':
    return {
      ...state,
      submissionCount: action.submissionCount
    }
  case 'CONNECTION_ERROR':
    return {
      ...state,
      connectionError: true
    }
  default:
    return state
  }
}
