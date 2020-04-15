import React, { useEffect } from 'react'
import Producto from './Producto'
import { Link } from 'react-router-dom'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { obtenerProductosAction } from '../../store/actions/productosActions'

function Productos() {
    const dispatch = useDispatch();
    useEffect(() => {
        //consultar la api
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos();
        //eslint-disable-next-line
    }, [])

    //obtener el state
    const productos = useSelector(state => state.productos.productos);
    const error = useSelector(state => state.productos.error)
    const loading = useSelector(state => state.productos.loading)

    return (
        <>
            <h2 className="text-center my-7">Listado de Productos</h2>
            <Link to={"/productos/nuevo"} className="btn btn-danger nuevo-post d-block d-md-inline-block mb-5">Agregar Producto</Link>
            {error ? <p className="font-weight-bold alert alert-danger text-center">Hubo un error</p> : null}
            {loading ? <p className="text-center">Cargando...</p> : null}

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precios</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length === 0 ? <tr><td colSpan="3">No hay productos</td></tr> : (
                        productos.map(producto => (
                            <Producto
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Productos
