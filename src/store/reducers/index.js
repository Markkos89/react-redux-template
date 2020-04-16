import { combineReducers } from 'redux';
import productosReducer from './productosReducer';
import alertasReducer from './alertasReducer';
import userReducer from './userReducer';

export default combineReducers({
    productos: productosReducer,
    alertas: alertasReducer,
    user: userReducer,
})