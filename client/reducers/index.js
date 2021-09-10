import { combineReducers } from 'redux'
import typing from './tying'
import message from './message'
import user from './user'

export default combineReducers({
  typing,
  message,
  user
})
