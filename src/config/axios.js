import axios from 'axios'
const clienteAxios = axios.create({
    baseURL: 'https://json-webserver-fake-api.herokuapp.com/'
})

export default clienteAxios;