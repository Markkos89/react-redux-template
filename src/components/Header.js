import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justifiy-content-between">
            <div className="container">
                <h1><Link to={"/"} className="text-light">CRUD</Link></h1>
            </div>
        </nav>
    )
}

export default Header
