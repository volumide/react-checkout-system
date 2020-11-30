import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';


function Description() {
    const path = useLocation()
	const [id] = useState(path.pathname.split('/')[2] || 1)
	const [products, setProducts] = useState([])
	const [error, setError] = useState('false')

	const current  = []
	async function fetchData(){
		const res = await fetch('https://fakestoreapi.com/products', {
			method: "GET",
			mode: "cors",
			"Content-type": "application/json"
		})
		res.json()
		.then(response => {
			current.push(...response)
			setProducts(current[id-1])
		})
		.catch(err =>{
            setError(err)
			console.log(error)
		})
	}

	useEffect(() => {
        fetchData()
    }, [id])
    
    function Render(){
        return <>
            <div className='container'>
                <div className='row py-5'>
                    <h3 className='col-12 text-center mb-5'>{products.title} </h3>
                    <div className="col-md-4">
                        <div className="img border py-5 bg-white">
                            <img src ={products.image} alt={products.title} loading='lazy' />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <p className='py-2 font-weight-bold  text-primary'>   ${products.price} </p>
                        <small className='d-block py-1'> {products.category} </small>
                        <p className='py-2'> {products.description} </p>
                    </div>
                </div>
            </div>
        </>
    }


	return (
		<div>
            <Render />
		</div>
	)
}

export default Description
