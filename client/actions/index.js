import { postMessage, fetchMessage } from '../api/message'
export const TYPING_PENDING = 'TYPING_PENDING'
export const TYPING_FINISH = 'TYPING_FINISH'
export const FETCH_MESSAGE_SUCCESS = 'FETCH_MESSAGE_SUCCESS'
export const SET_RECEIVER = 'SET_RECEIVER'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export function sendMessage (senderId, receiverId, message) {
  return (dispatch) => {
    dispatch(typingPending())
    return postMessage(senderId, receiverId, message)
      .then(() => {
        dispatch(typingFinish())
        return null
      })
      .catch(err => {
        console.error('sendMessage has issue', err.message)
      })
  }
}

export function getMessage (senderId, receiverId) {
  return (dispatch) => {
    return fetchMessage(senderId, receiverId)
      .then((messageData) => {
        dispatch(fetchMessageSuccess(messageData))
        return null
      })
      .catch(err => {
        console.error('getMessage has issue', err.message)
      })
  }
}

// senderName = { name, id }, currentUser = { name, id }

function typingPending () {
  return {
    type: TYPING_PENDING
  }
}

function typingFinish () {
  return {
    type: TYPING_FINISH
  }
}

function fetchMessageSuccess (messageData) {
  return {
    type: FETCH_MESSAGE_SUCCESS,
    messageData
  }
}

export function setReceiver (name, id) {
  const receiver = { name, id }
  return {
    type: SET_RECEIVER,
    receiver
  }
}

export function setCurrentUser (name, id) {
  return {
    type: SET_CURRENT_USER,
    currentUser: { name, id }
  }
}
