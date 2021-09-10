import { TYPING_PENDING, TYPING_FINISH } from '../actions/index'

function typing (state = false, action) {
  switch (action.type) {
    case TYPING_PENDING:
      return true
    case TYPING_FINISH:
      return false
    default:
      return state
  }
}

export default typing
