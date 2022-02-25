import React, { useState, useEffect } from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from "react-bootstrap"

function Navbar() {
    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 200) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div>
            <Nav className={`nav ${show && 'nav_wood'}`} defaultSelected="Home">
                <NavItem eventKey="Logo">
                    <NavLink to={"/"} className='logo'>
                        <h1>TutoMania</h1>
                    </NavLink>
                </NavItem>
                <div className='nav-components'>
                    <NavItem eventKey="Home">
                        <NavLink to={"/"} className="nav-items">
                            <span>Home</span>
                        </NavLink>
                    </NavItem>
                    <NavItem eventKey="Subjects">
                        <NavLink to={"/Subjects"} className="nav-items">
                            <span>Subjects</span>
                        </NavLink>
                    </NavItem>
                    <NavItem eventKey="Aboutus">
                        <NavLink to={"/Aboutus"} className="nav-items">
                            <span>About Us</span>
                        </NavLink>
                    </NavItem>
                    <NavItem eventKey="Login">
                        <NavLink to={"/Login"} className="nav-items">
                            <span>Login</span>
                        </NavLink>
                    </NavItem>
                </div>
            </Nav>
        </div>
    )
}

export default Navbar