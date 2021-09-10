import request from 'superagent'

export function postMessage (senderId, receiverId, message) {
  const messagePack = { senderId, receiverId, message }
  return request.post('/api/v1/message')
    .send(messagePack)
    .then((res) => {
      return res.body
    })
    .catch(err => {
      console.error('api post error', err.message)
    })
}

export function fetchMessage (senderId, receiverId) {
  const ids = { senderId, receiverId }
  return request.get('/api/v1/message')
    .send(ids)
    .then((res) => {
      return res.body
    })
    .catch(err => {
      console.error('api get error', err.message)
    })
}
