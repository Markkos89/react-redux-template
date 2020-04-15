import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//actions de redux
import { crearNuevoProductoAction } from '../../store/actions/productosActions'
import { mostrarAlertaAction, ocultarAlertaAction } from '../../store/actions/alertaActions'

function NuevoProducto({ history }) {
    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState(0)

    //utilizar useDispatch y te crea una ufncion
    const dispatch = useDispatch();

    //acceder al state del store
    const loading = useSelector(state => state.productos.loading)
    const error = useSelector(state => state.productos.error)
    const alerta = useSelector(state => state.alertas.alerta)

    const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto))

    const SubmitNuevoProducto = e => {
        e.preventDefault();

        //validar formulario
        if (nombre.trim() === '' || precio <= 0) {

            const alerta = {
                msg: "Ambos campos son obligatorios",
                classes: "alert alert-danger text-center text-uppercase p3"
            }

            dispatch(mostrarAlertaAction(alerta))

            return;
        }

        //si no hay errores
        dispatch(ocultarAlertaAction());

        //crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        });

        history.push("/")
    }

    return (
        <div className="row justiify-content">
            <div className="col-md-8">
                <div className="card">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Agregar Nuevo Producto
                    </h2>
                    {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
                    <form className="m-5" onSubmit={SubmitNuevoProducto}>
                        <div className="form-group">
                            <label>Nombre Producto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Producto"
                                name="nombre"
                                value={nombre}
                                onChange={e => setNombre(e.target.value)}
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
                                onChange={e => setPrecio(Number(e.target.value))}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                    </form>
                    {loading ? <p className="mt-4 text-center">Cargando</p> : null}
                    {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null}
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto
