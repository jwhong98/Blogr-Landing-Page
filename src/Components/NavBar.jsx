import React from 'react'
import img from '../images/logo.svg'

const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="nav-wrapper">
                <img alt="logo" className="logo" src={img}></img>
                <ul className="nav-menu">
                    <li className="menu-item">Product</li>
                    <li className="menu-item">Company</li>
                    <li className="menu-item">Connect</li>
                </ul>
                <div className="nav-end">
                    <a href="/" className="login">Login</a>
                    <button className="sign-up">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
