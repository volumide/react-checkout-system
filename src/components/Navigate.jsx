import React from 'react'
import {Link} from 'react-router-dom'
export default function Navigate() {
	return (
		<div>
			<nav className="nav justify-content-center bg-light">
				<p className='nav-link text-dark'>
					<Link to ='/'>Home</Link>
				</p>
				<p className='nav-link text-dark'>
					<Link to ='/cart'>Cart</Link>
				</p>
			</nav>
			
		</div>
	)
}
