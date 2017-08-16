import { LOGOUT, LOGIN_PROCESS, LOGIN_REJECTED, LOGIN_FULFILLED } from '../constants/LoginActionTypes'


const initialUserState = {
  	user: {
  		email: '',
    	password: '',
        token: ''
  	},
    loggingIn: false,
    loggedIn: false,
    error: null,
};

// User
export default function reducer(state = initialUserState, action) {
  	switch (action.type) {
        case LOGIN_PROCESS:
            return {...state, loggingIn: true, error: action.payload}
        case LOGIN_REJECTED:
            return {...state, loggingIn: false, error: action.payload}
        case LOGIN_FULFILLED:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                user: action.payload,
            }
        case LOGOUT:

            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                user: action.payload,
            }
        default:
          return state
    }
}



