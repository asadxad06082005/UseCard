import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
                            <NavLink class="nav-link" to="/cart">Cart</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar