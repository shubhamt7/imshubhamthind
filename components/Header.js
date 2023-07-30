import {NavLink} from 'react-router-dom'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faFile} from '@fortawesome/free-solid-svg-icons'

const Header=(props)=>(

    <div className="header">
        <div className="header__content">
            <h1 className="header__title">{props.pagename}</h1>
            {props.subtitle && <p className="header__subtitle">{props.subtitle} <FontAwesomeIcon className="heart_icon" icon={faHeart}/></p>}
            {props.link && <p className="resume__link">
            
            <a target="blank" href={props.link}>Click here to see my resume</a>
            
            </p>}

            <div className="navbar">
                <NavLink to="/" className="navbtn" activeClassName="navbtn-active" exact={true}>Home</NavLink> 
                <NavLink to="/portfolio" className="navbtn" activeClassName="navbtn-active">Projects</NavLink>
                <NavLink to="/about" className="navbtn" activeClassName="navbtn-active">About me</NavLink>
                <NavLink to="/contact" className="navbtn" activeClassName="navbtn-active">Contact me</NavLink>
            </div>
            
        </div>
    </div>
)

export default Header
