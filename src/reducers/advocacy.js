export function advocacy(state = [], action) {
  switch (action.type) {
  case 'SET_ORG_SOURCE':
    return {
      ...state,
      source: action.org
    }
  case 'ADVOCACY_MESSAGE_SUBMIT':
    return {
      ...state,
      message: action.message
    }
  case 'ADVOCACY_SUCCESS':
    return {
      ...state,
      error:   0,
      success: 1
    }
  case 'ADVOCACY_ERROR':
    return {
      ...state,
      error:   1,
      success: 0
    }
  case 'UPDATED_ACTIVIST':
    return {
      ...state,
      activist: action.activist
    }
  default:
    return state
  }
}
