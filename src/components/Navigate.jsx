import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Navigate() {
	return (
		<div>
            <nav className="navbar navbar-expand-sm navbar-light mx-0 bg-dark">
                <NavLink className="navbar-brand text-white" to ='/'>Navbar</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink className="nav-link text-white d-block" to="/">Home<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link text-white d-block" to="/cart">Cart<span className="sr-only">(current)</span></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
		</div>
	)
}
