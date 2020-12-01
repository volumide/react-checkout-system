import React from 'react'
import { Link } from "react-router-dom";


function Cards({product, event, show=false}) {
    return (
        <div>
            <div className="card border-0">
                <div className="img py-4">
                    <img src ={product.image} alt={product.title} loading='lazy' />
                </div>
                
                <div className="card-body bg-light">
                    <p className="card-title "> {product.name}</p>
                    <h5 className="card-text d-inline-block font-weight-bold py-2"> ${product.price} </h5>
                    <p 
                        className="card-text text-nowrap text-truncate d-block" 
                        style= {{
                            maxWidth: "250px",
                            fontSize: "0.89rem",
                        }}
                    > {product.title} </p>
                    <p className="d-block" >
                        <Link to ={`description/${product.id}`} className="text-secondary font-weight-bold">View Product</Link>
                    </p>
                    <button type="button" className="btn bg-secondary text-white py-2 btn-sm  " onClick = {event} style = {{display: show  ? "inline-block": "none"}}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cards