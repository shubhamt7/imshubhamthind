import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage=()=>(
    <div>
        <h2>OOPS!!</h2>
        <p>Error: 404 Page not found.</p>
        <Link to="/">Go home</Link>
    </div>
)

export default NotFoundPage