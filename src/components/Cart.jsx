import React,  { useState, useEffect } from "react"
import Cards from './card/Cards.jsx'

 function Product() {
	let cartItem = JSON.parse(localStorage.getItem('cartItem')) || 1
    let [cart, setCart] = useState([])
    
	function getCartProduct(){
		setCart(cartItem)
		console.log(cart)
	}

	useEffect(() => {
		getCartProduct()
    }, [])

	return (
		<div>
			<div className="container">
				<div className="row">
					{cart.map((product, id) => {
						return(
                            <div className="col-md-4 py-5" key={id}>
                                <Cards product = {product} />
                            </div>)
						})
					}
				</div>
			</div>
		</div>
	)
}


export default Product