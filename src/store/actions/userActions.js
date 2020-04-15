import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../types';
import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2'

// crear nuevo usuario
export function crearNuevoUsuarioAction(usuario) {
    return async (dispatch) => {
        dispatch(agregarUsuario())
        try {
            await clienteAxios.post('/usuarios', usuario)
            dispatch(agregarUsuarioExito(usuario))
            Swal.fire('Correcto', 'El usuario se registró correctamente',
                'success')
        } catch (error) {
            console.log(error)
            dispatch(agregarUsuarioError(true))
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const agregarUsuario = () => ({
    type: REGISTER_REQUEST,
    payload: true
})

const agregarUsuarioExito = usuario => ({
    type: REGISTER_SUCCESS,
    payload: usuario
})

const agregarUsuarioError = estado => ({
    type: REGISTER_FAILURE,
    payload: estado
})

// Login action
export function loginAction(usuario) {
    return async (dispatch) => {
        dispatch(loginUsuario())
        try {
            const usuarios = await clienteAxios.get('/usuarios')
            const existe = usuarios.data.find(user => user.username.trim() === usuario.username.trim() && user.password.trim() === usuario.password.trim())
            if (existe) {
                dispatch(loginUsuarioExito(usuario))
                Swal.fire('Correcto', 'El usuario Logeó', 'success')
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Hubo un error',
                    text: 'Hubo un error, intenta de nuevo'
                })
            }
        } catch (error) {
            console.log(error)
            dispatch(loginUsuarioError(true))
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const loginUsuario = () => ({
    type: LOGIN_REQUEST,
    payload: true
})

const loginUsuarioExito = usuario => ({
    type: LOGIN_SUCCESS,
    payload: usuario
})

const loginUsuarioError = estado => ({
    type: LOGIN_FAILURE,
    payload: estado
})