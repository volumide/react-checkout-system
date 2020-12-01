import React, { useState, useEffect } from "react";
import Cards from './card/Cards.jsx'

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
        // console.log(cartCopy)
	}

	useEffect(() => {
        if (cartItem) setCart(cartItem)
        fetchData()
	}, [])



	return (	
		<div>
			<div className="container px-0">
				<div className="row py-5 px-0 mx-0">
					<h5 className='col-12 font-weight-bold border rounded  py-3 ' style={{width:"500px"}}>Products</h5>
					{/* <p className='col-12 text-center border py-2 rounded'> <i class="fa fa-shopping-cart text-danger" aria-hidden="true"></i> <sup className='font-weight-bold'>{cart.length}</sup> </p> */}
					{products.map((product, id) => {
                        return(
                            <div className="col-md-3 py-4" key={id}>
                                <Cards product = {product} event = {()=> addToCart(product, product.id)} show = {true}/>
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