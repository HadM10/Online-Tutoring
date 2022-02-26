import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from "react-bootstrap"
import '../css/Navbar.css'

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
                    <NavItem eventKey="Skills">
                        <NavLink to={"/skills"} className="nav-items">
                            <span>Skills</span>
                        </NavLink>
                    </NavItem>
                    <NavItem eventKey="Aboutus">
                        <NavLink to={"/aboutus"} className="nav-items">
                            <span>About Us</span>
                        </NavLink>
                    </NavItem>
                    <NavItem eventKey="Login">
                        <NavLink to={"/login"} className="nav-items">
                            <span>Login</span>
                        </NavLink>
                    </NavItem>
                </div>
                <NavItem eventKey="register">
                    <NavLink to={"/register"} style={{textDecoration: "none"}}>
                        <div className='register'>
                            <span style={{marginRight: "50px"}}>Register</span>
                            <img width='24px' height='24px' src='./avatar.png'></img>
                        </div>
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default Navbar