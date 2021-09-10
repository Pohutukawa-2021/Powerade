import { SET_RECEIVER, SET_CURRENT_USER } from '../actions/index'

function user (state = {}, action) {
  switch (action.type) {
    case SET_RECEIVER:
      return action.receiver
    case SET_CURRENT_USER:
      return action.currentUser
    default:
      return state
  }
}

export default user
