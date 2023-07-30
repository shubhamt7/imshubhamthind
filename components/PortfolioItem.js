import React from 'react'
import {Link} from 'react-router-dom'

const PortfolioItem =(props) =>(

    <div>
        <p>Portfolio item</p>
        <p>Item number: {props.match.params.id}</p>
        <Link to="/portfolio">Go back</Link>
    </div>
    
)

export default PortfolioItem 