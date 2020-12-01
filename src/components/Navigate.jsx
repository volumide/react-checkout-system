import React,  { useState, useEffect } from "react"
import {NavLink} from 'react-router-dom'
import Cart from './func/Cart'
function Navigate() {

    // let cartItem = JSON.parse(localStorage.getItem('cartItem')) || 1
    // let [cart, setCart] = useState([])
    
	// function getCartProduct(){
	// 	setCart(cartItem)
	// }

    // useEffect(() => {
    //     if (cartItem) setCart(cartItem)
    //     getCartProduct()
	// }, [cart])

	return (
		<div>
            <nav className="navbar navbar-expand-sm navbar-light mx-0 bg-dark">
                <NavLink className="navbar-brand text-white" to ='/'> LOGO  </NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink className="nav-link text-white d-block font-weight-bold" to="/">Home<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link text-white d-block d-flex font-weight-bold" to="/cart">Cart <span className="ml-1" style={{fontSize: "small"}}>{<Cart /> } </span></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
		</div>
	)
}

export default  Navigate
