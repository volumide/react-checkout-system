import React, { useState, useEffect } from "react";
import { Link, Route, Router } from "react-router-dom";

 function Cart() {
	const cartItem = JSON.parse(localStorage.getItem('cartItem')) || []
	const [products, setProducts] = useState([])
	const [cart, setCart] = useState([cartItem])
	const [error, setError] = useState('false')
	
	async function fetchData(){
		const res = await fetch('https://fakestoreapi.com/products', {
			method: "GET",
			mode: "cors",
			"Content-type": "application/json"
		})
		res.json()
		.then(response => {
			// console.log(response)
			setProducts(response)
		})
		.catch(err =>{
			console.log(err)
			setError(err)
		})
	}

	const addToCart = (product)=>{
		setCart([...cart, product])
	}

	const url = (id)=>{
		localStorage.setItem('currentId', id)
		console.log(id)
	}

	useEffect(() => {
		localStorage.setItem('cartItem', JSON.stringify(cart))
		fetchData()
	}, [cart])



	return (	
		<div>
			<div className="container">
				<div className="row py-5">
					<h4 className='col-12 text-center'>All Store Products</h4>
					<p className='col-12 text-center'>Items In cart {cart.length - 1} </p>
					{products.map((product, id) => {
							return(
								<div className="col-md-3 py-4" key={id}>
									<div className="card rounded-0">
										<div className="img">
											<img src ={product.image} alt={product.title} loading='lazy' />
										</div>
										
										<div className="card-body">
											<p className="card-title"> {product.title}</p>
											<small className="card-text d-block"> {product.price} </small>
											<p className="d-block py-2" onClick = {()=> url(product.id)}>
												 <Link to ={`description/${product.id}`}>View Product</Link>
											</p>
											<button type="button" className="btn btn-primary btn-sm rounded-0 my-3" onClick={()=> addToCart(product)}>Add to Cart</button>
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

export default Cart