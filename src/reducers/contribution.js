export function contribution(state = [], action) {
  switch (action.type) {
  case 'SET_CONTRIBUTION':
    return {
      ...state,
      total: action.total
    }
  case 'SET_CONTRIBUTION_FAILED':
    return {
      ...state,
      error: true
    }
  case 'CONTRIBUTION_COMPLETE':
    return {
      ...state,
      complete: true
    }
  default:
    return state
  }
}
