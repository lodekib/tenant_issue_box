import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary  mb-4">
            <div className="container">
                <img className="navbar-brand text-dark" src="img/logo.svg" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0">                    
                    <li className="nav-item">
                        <Link className="nav-link text-dark" href={route('login')}>Login</Link>
                    </li>
                   
                </ul>
                </div>
            </div>
        </nav>
    )
}
