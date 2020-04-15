import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { loginAction } from '../../store/actions/userActions';

const Login = () => {
    // reset login status
    // this.props.logout();
    const dispatch = useDispatch();
    const history = useHistory();

    const [usuario, setUsuario] = useState({
        username: '',
        password: '',
    });
    const [submitted, setSubmitted] = useState(false)


    const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);
        if (usuario.username && usuario.password) {
            dispatch(loginAction(usuario));
            history.push("/productos")
        }
    }

    return (
        <div className="col-md-6 col-md-offset-3">
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className={'form-group' + (submitted && !usuario.username ? ' has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={usuario.username} onChange={handleChange} />
                    {submitted && !usuario.username &&
                        <div className="help-block">Username is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !usuario.password ? ' has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={usuario.password} onChange={handleChange} />
                    {submitted && !usuario.password &&
                        <div className="help-block">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Login</button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </div>
            </form>
        </div>
    );
}

export default Login