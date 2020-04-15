import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { crearNuevoUsuarioAction } from '../../store/actions/userActions';

const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        setSubmitted(true);
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(crearNuevoUsuarioAction(user));
            history.push("/productos")
        }
    }

    return (
        <div className="col-md-6 col-md-offset-3">
            <h2>Register</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={handleChange} />
                    {submitted && !user.firstName &&
                        <div className="help-block">First Name is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={handleChange} />
                    {submitted && !user.lastName &&
                        <div className="help-block">Last Name is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={user.username} onChange={handleChange} />
                    {submitted && !user.username &&
                        <div className="help-block">Username is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange} />
                    {submitted && !user.password &&
                        <div className="help-block">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Register</button>
                    <Link to="/" className="btn btn-link">Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default Register;

// function mapState(state) {
//     const { registering } = state.registration;
//     return { registering };
// }

// const actionCreators = {
//     register: userActions.register
// }

// const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
// export { connectedRegisterPage as RegisterPage };