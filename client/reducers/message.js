import { FETCH_MESSAGE_SUCCESS } from '../actions'

function message (state = [], action) {
  switch (action.type) {
    case FETCH_MESSAGE_SUCCESS:
      return action.messageData
    default:
      return state
  }
}

export default message
