import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from "react-bootstrap"
import '../css/Navbar.css'

function Navbar() {
    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
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
                    <Link to={"/"} className='logo'>
                        <h1>TutoMania</h1>
                    </Link>
                </NavItem>
                <div className='nav-components'>
                    <NavItem eventKey="Home">
                        <Link to={"/"} className="nav-items">
                            <span>Home</span>
                        </Link>
                    </NavItem>
                    <NavItem eventKey="Skills">
                        <Link to={"/skills"} className="nav-items">
                            <span>Skills</span>
                        </Link>
                    </NavItem>
                    <NavItem eventKey="Aboutus">
                        <Link to={"/aboutus"} className="nav-items">
                            <span>About Us</span>
                        </Link>
                    </NavItem>
                    <NavItem eventKey="Login">
                        <Link to={"/login"} className="nav-items">
                            <span>Login</span>
                        </Link>
                    </NavItem>
                </div>
                <NavItem eventKey="register">
                    <Link to={"/register"} style={{textDecoration: "none"}}>
                        <div className='register'>
                            <span style={{marginRight: "50px"}}>Register</span>
                            <img width='24px' height='24px' src={window.location.origin + '/avatar.png'}></img>
                        </div>
                    </Link>
                </NavItem>
            </Nav>
        </div>
    )
}

export default Navbar