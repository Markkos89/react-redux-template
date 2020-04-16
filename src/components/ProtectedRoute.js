import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ component }) => {
    const Component = component;
    const loggedin = useSelector(state => state.user.loggedin)

    return loggedin ? (
        <Component />
    ) : (
            <Redirect to={{ pathname: '/' }} />
        );
}

export default ProtectedRoute;