import { LOGIN_PROCESS, LOGIN_REJECTED, LOGIN_FULFILLED } from '../constants/LoginActionTypes'

const initialUserState = {
  	user: {
  		  email: '',
    		password: '',
    		token: ''
  	},
    fetching: false,
    fetched: false,
    error: null,
};

// User
export default function reducer(state = initialUserState, action) {
  	switch (action.type) {
        case LOGIN_PROCESS:
            return {...state, fetching: true, error: action.payload}
        case LOGIN_REJECTED:
            return {...state, fetching: false, error: action.payload}
        case LOGIN_FULFILLED:
            console.log(action.payload)
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload,
            }
        default:
          return state
    }
}



