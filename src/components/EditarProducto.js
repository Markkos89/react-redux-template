import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editarProductoAction } from '../actions/productosActions'
import { useHistory } from 'react-router-dom'

function EditarProducto() {
    const history = useHistory();
    const dispatch = useDispatch();
    //nuevo state de producto
    const [producto, setProducto] = useState({
        nombre: '',
        precio: ''
    })

    //producto a editar
    const productoeditar = useSelector(state => state.productos.productoeditar);

    //llena el state automaticamente
    useEffect(() => {
        setProducto(productoeditar)
    }, [productoeditar])

    //Leer los datos del formulario
    const onChangeFormulario = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const { nombre, precio } = producto;

    const submitEditarProducto = e => {
        e.preventDefault();
        dispatch(editarProductoAction(producto))
        history.push("/")
    }

    return (
        <div className="row justiify-content">
            <div className="col-md-8">
                <div className="card">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Editar Producto
                    </h2>
                    <form className="m-5" onSubmit={submitEditarProducto}>
                        <div className="form-group">
                            <label>Nombre Producto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Producto"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div className="form-group">
                            <label>Precio Producto</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Precio Producto"
                                name="precio"
                                value={precio}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto
