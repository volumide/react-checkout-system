import React, { useState, useEffect } from 'react'

function Cart() {

    let cartItem = JSON.parse(localStorage.getItem('cartItem')) || 1
    let [cart, setCart] = useState([])

    function callCart() {
        setCart(cartItem)
    }

    useEffect(() => {
        callCart()
    }, [])
    return (
        <div>
            <span> {cart.length} </span>
        </div>
    )
}

export default Cart