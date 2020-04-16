import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Header() {
    const loggedin = useSelector(state => state.user.loggedin)
    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-primary justifiy-content-between">
        //     <div className="container">
        //         <h1><Link to={"/"} className="text-light">CRUD</Link></h1>
        //         <Link to={"/productos"} className="text-light">Productos</Link>
        //     </div>
        // </nav >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href={"/productos"}>React-CRUD</Navbar.Brand>
            {loggedin ?
                <>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" bg="dark" variant="dark">
                        <Nav className="mr-auto">
                            <Link to="/productos" className="text-light">Productos</Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown" bg="dark" variant="dark">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </>
                : <>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </>}
        </Navbar>
    )
}

export default Header
