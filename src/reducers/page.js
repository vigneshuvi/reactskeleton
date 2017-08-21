import { DRAWER_STATUS, PAGE_LOGIN, PAGE_HOME, PAGE_SPAM, PAGE_FORUMS, PAGE_UPDATES, PAGE_SOCIAL } from '../constants/PageActionTypes'

const initialPageState = {
  	path: '/',
    drawerStatus: false
};


// Page Path
export default function reducer(state = initialPageState, action) {
  	switch (action.type) {
        case DRAWER_STATUS: {
            return {...state, drawerStatus: action.payload.status}
        }
        case PAGE_LOGIN:
            return {...state, path: action.payload}
        case PAGE_HOME:
            return {...state, path: action.payload}
        case PAGE_SPAM:
            return {...state, path: action.payload}
        case PAGE_FORUMS:
           return {...state, path: action.payload}
        case PAGE_UPDATES:
            return {...state, path: action.payload}
        case PAGE_SOCIAL:
            return {...state, path: action.payload}
        default:
          return state
    }
}


