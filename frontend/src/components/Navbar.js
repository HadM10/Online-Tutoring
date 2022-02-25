import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from "react-bootstrap"

function Navbar() {
    return (
        <div>
                <Nav className="nav" defaultSelected="Home">
                    <NavItem eventKey="Logo">
                        <NavLink to={"/"} className="nav-link">
                            <h1>TutoMania</h1>
                        </NavLink>
                    </NavItem>
                    <NavItem eventKey="Home">
                        <NavLink to={"/"} className="nav-link">
                            <span>Home</span>
                        </NavLink>
                    </NavItem>
                    <NavItem eventKey="Subjects">
                        <NavLink to={"/Subjects"} className="nav-link">
                            <span>Subjects</span>
                        </NavLink>
                    </NavItem>
                    <NavItem eventKey="Aboutus">
                        <NavLink to={"/Aboutus"} className="nav-link">
                            <span>About Us</span>
                        </NavLink>
                    </NavItem>
                    <NavItem eventKey="Login">
                        <NavLink to={"/Login"} className="nav-link">
                            <span>Login</span>
                        </NavLink>
                    </NavItem>
                </Nav>
        </div>
    )
}

export default Navbar