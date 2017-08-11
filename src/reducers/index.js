import { combineReducers } from 'redux'
import posts from './posts'
import user from './user'

const rootReducer = combineReducers({
  posts: posts,
  user: user
})

export default rootReducer
