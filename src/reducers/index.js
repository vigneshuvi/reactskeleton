import { combineReducers } from 'redux'
import page from './page'
import posts from './posts'
import user from './user'

// Combined all reducers.
const rootReducer = combineReducers({
	  page: page,
	  posts: posts,
	  user: user
})

export default rootReducer
