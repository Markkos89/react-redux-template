import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../types'

//Cada reducer tiene su state

const initialState = {
    alerta: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_ALERTA:
            return {
                ...state,
                alerta: action.payload
            }
        case OCULTAR_ALERTA:
            return {
                ...state,
                alerta: null
            }
        default:
            return state;
    }
}