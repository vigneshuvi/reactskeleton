import { FETCH_POSTS, FETCH_POSTS_REJECTED, FETCH_POSTS_FULFILLED, ADD_POST, UPDATE_POST, DELETE_POST } from '../constants/PostActionTypes'


// Post Initial State.
const initialState = {
    posts: [],
    fetching: false,
    fetched: false,
    error: null,
}

export default function reducer(state=initialState, action) {
    switch (action.type) {
      case FETCH_POSTS: {
        return {...state, fetching: true}
      }
      case FETCH_POSTS_REJECTED: {
        return {...state, fetching: false, error: action.payload}
      }
      case FETCH_POSTS_FULFILLED: {
        return {
          ...state,
          fetching: false,
          fetched: true,
          posts: action.payload,
        }
      }
      case ADD_POST: {
        return {
          ...state,
          posts: [...state.posts, action.payload],
        }
      }
      case UPDATE_POST: {
        const { id } = action.payload
        const newPosts = [...state.posts]
        const postToUpdate = newPosts.findIndex(post => post.id === id)
        newPosts[postToUpdate] = action.payload;

        return {
          ...state,
          posts: newPosts,
        }
      }
      case DELETE_POST: {
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== action.payload),
        }
      }
      default: {
        return state
      }
    }

}