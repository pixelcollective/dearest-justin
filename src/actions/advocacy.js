import axios from 'axios'

function setStep(step) {
  return {
    type: 'STEP',
    step: step
  }
}
function advocacySuccess() {
  return {
    type:    'ADVOCACY_SUCCESS',
    success: 1
  }
}
function advocacyError() {
  return {
    type:  'ADVOCACY_ERROR',
    error: 1
  }
}
export function setOrgSource(org){
  return {
    type: 'SET_ORG_SOURCE',
    org:  org
  }
}
export function updateActivist(activist) {
  return {
    type:     'UPDATED_ACTIVIST',
    activist: activist
  }
}
export function submitLetter(message) {
  return(dispatch) => {
    dispatch(setStep(2))
    dispatch({type: 'ADVOCACY_MESSAGE_SUBMIT', message: message})
  }
}
export function submitAdvocacy(advocacy) {
  return (dispatch) => {
    let actionNetwork = {
      config: {
        headers: {
          'Content-Type': 'application/json'
        }
      },
      endpoint: 'https://www.actionnetwork.org/api/v2/forms/c2100bbd-f157-48cb-a856-9fd90761da95/submissions/',
      data:     {
        'person': {
          'postal_addresses': [{
            'postal_code': advocacy.activist.postalCode
          }],
          'email_addresses': [{
            'address': advocacy.activist.email
          }],
          'custom_fields': {
            'message': advocacy.message
          }
        },
        'action_network:referrer_data': {
          'source': advocacy.source
        }
      }
    }
    console.log(actionNetwork)
    axios.post(actionNetwork.endpoint, actionNetwork.data, actionNetwork.config)
      .then(function() {
        dispatch(setStep(3))
        dispatch(advocacySuccess())
      })
      .catch(function() {
        dispatch(advocacyError())
      })
  }
}
