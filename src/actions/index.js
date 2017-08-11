import * as postTypes from '../constants/PostActionTypes'
import * as loginTypes from '../constants/LoginActionTypes'
import axios from "axios";

export function fetchTweets() {
  return function(dispatch) {
    dispatch({type: postTypes.FETCH_POSTS});
    
    /* 
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
    */
    axios.get("http://rest.learncode.academy/api/reacttest/tweets")
      .then((response) => {
        dispatch({type: postTypes.FETCH_POSTS_FULFILLED, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: postTypes.FETCH_POSTS_REJECTED, payload: err})
      })
  }
}


export function loginUser(email, password) {
   return function(dispatch) {
      dispatch({
          type: loginTypes.LOGIN_FULFILLED,
          payload: {
              email: email,
              password: password,
              token: "XADFASDF23453ASDFZZ@#%@%DFs" 
          }
      });
    }
}

export function addPost(id, text) {
  return {
    type: postTypes.ADD_POST,
    payload: {
      id,
      text
    },
  }
}

export const deletePost = id => ({ type: postTypes.DELETE_POST, id })
export const editPost = (id, text) => ({ type: postTypes.UPDATE_POST, id, text })
