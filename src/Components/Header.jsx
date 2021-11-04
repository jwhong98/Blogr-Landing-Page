import React from 'react'
import NavBar from './NavBar'

const Header = () => {
    return (
        <div className="header-container">
            <NavBar />
            <div className="header-text-wrapper">
                <h1 className="title">A modern publishing platform</h1>
                <p className="subtitle">Grow your audience and build your online brand</p>
                <div className="button-wrapper">
                    <button className="button white">Start for Free</button>
                    <button className="button">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Header
