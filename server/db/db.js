const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = { getMessages, newMessage }

function getMessages (data, db = connection) {
  const { senderId, receiverId } = data
  return db('messages')
    .join('senders', 'messages.senders_id', 'senders.id')
    .join('receivers', 'messages.receivers_id', 'receivers.id')
    .select(
      'messages.id as messageId',
      'receivers_id as receiverId',
      'receivers.name as receiverName',
      'senders.id as senderId',
      'senders.name as senderName',
      'message'
    )
    .where('receivers_id', receiverId)
    .where('senders_id', senderId)
    .then(messages => messages)
    .catch(err => {
      console.log('GET ERROR: ' + err.message)
    })
}

function newMessage (data, db = connection) {
  const { senderId, receiverId, message } = data
  return db('messages')
    .insert({ senders_id: senderId, receivers_id: receiverId, message: message })
}
