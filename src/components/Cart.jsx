import React,  { useState, useEffect } from "react"

 function Product() {
	const cartItem = JSON.parse(localStorage.getItem('cartItem')) || 1
	const [cart, setCart] = useState([cartItem])
	
	function getCartProduct(){
		let newCart = cart.shift()
		setCart(newCart)
		console.log(newCart)
	}

	useEffect(() => {
		// localStorage.setItem('cartItem', JSON.stringify(cart))
		getCartProduct()
	}, [])

	return (
		<div>
			<div className="container">
				<div className="row">
					{cart.map((product, id) => {
							return(
								<div className="col-md-3 py-4" key={id}>
									<div className="card rounded-0">
										<div className="img">
											<img src ={product.image} alt={product.title} loading='lazy' />
										</div>
										
										<div className="card-body">
											<p className="card-title"> {product.name}</p>
											<p className="card-text d-block"> {product.price} </p>
											<p className="card-text d-block"> {product.title} </p>
											{/* <button type="button" className="btn btn-primary btn-sm rounded-0 my-3" >Add to Cart</button> */}
										</div>

									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}


export default Product