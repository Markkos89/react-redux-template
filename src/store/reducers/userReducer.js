import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    USERS_LOGOUT
} from '../types'

//Cada reducer tiene su state

const initialState = {
    user: {
        username: '',
        password: ''
    },
    loggedin: false,
    loading: false,
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedin: true,
                loading: false,
                user: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case USERS_LOGOUT:
            return {
                ...state,
                user: {},
                loggedin: false,
                loading: false,
            }
        default:
            return state;
    }
}