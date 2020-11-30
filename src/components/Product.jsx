import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

 function Cart() {
	let cartItem =  JSON.parse(localStorage.getItem('cartItem'))
	let [products, setProducts] = useState([]) // product container from api
	let [cart, setCart] = useState([]) //adding to carts and getting from cart container
	let [error, setError] = useState('false') //setting erroe
    
    // fetch data from api
	async function fetchData(){
		const res = await fetch('https://fakestoreapi.com/products', {
			method: "GET",
			mode: "cors",
			"Content-type": "application/json"
		})
		res.json()
		.then(response => {
			setProducts(response)
		})
		.catch(err =>{
            setError(err)
			console.log(error)
		})
	}

	const addToCart = (product, id)=>{
        let cartCopy = [...cart]
        let existingitem = cartCopy.find(item => item.id === id)

        if (existingitem) {
            console.log('item already exist in cart')
            return 
        }

        cartCopy.push(product)
        setCart([...cart, product])
        localStorage.setItem('cartItem', JSON.stringify(cartCopy))
        console.log(cartCopy)
	}

	useEffect(() => {
        if (cartItem) setCart(cartItem)
        fetchData()
	}, [])



	return (	
		<div>
			<div className="container">
				<div className="row py-5">
					<h4 className='col-12 text-center'>All Store Products</h4>
					<p className='col-12 text-center'>Items In cart {cart.length} </p>
					{products.map((product, id) => {
							return(
								<div className="col-md-4 py-4" key={id}>
									<div className="card rounded-0">
										<div className="img">
											<img src ={product.image} alt={product.title} loading='lazy' />
										</div>
										
										<div className="card-body">
											<small className="card-text d-block"> {product.price} </small>
											<p className="d-block py-2">
												 <Link to ={`description/${product.id}`}>View Product</Link>
											</p>
											<button type="button" className="btn btn-primary btn-sm rounded-0 my-3" onClick={()=> addToCart(product, product.id)}>Add to Cart</button>
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