import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faEvernote} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons'
const myImage = require('../static/images/shubham_thind.jpg');
const backgroundImage = require('../static/images/homepage-background.jpg');


const HomePage= ()=>(
    <div className="homepage">
        <section className= "skewedBox" background = {backgroundImage}>
    
            <div className="container">
            <div className="social-icons">
                <p id="github"><a href="https://github.com/shubhamt7" target="blank"><FontAwesomeIcon icon={faGithub}/></a></p> 
                <p id="linkedin"><a href="https://www.linkedin.com/in/shubham-thind-36133214b" target="blank"><FontAwesomeIcon icon={faLinkedin}/></a></p>
                <p id="gmail"><a href="mailto:shubhamthind7@gmail.com" target="blank"><FontAwesomeIcon icon={faEnvelope}/></a></p> 
            </div>
            
                <div id = "myImageContainer">
                    <img id = "myImage" src = {myImage} width = "300px"/>
                </div>

                <h2>Shubham Thind</h2>
                <div className="homepage__intro">
                    <p className="homepage__intro__firstline"><span>A Poet and a Programmer..</span></p>
                    <p className="homepage__intro__secondline">Have a look around to know more about me!</p>
                </div>
                <Link to="/about"><button className="btn btn success">Check inside!</button></Link>

                

            </div>
        </section>
        <section className="sec2">
            <div className="homepage__footer">
                <p>Made with <FontAwesomeIcon className="heart_icon_red" icon={faHeart}/> by Shubham Thind </p>
            </div>
        </section>
    </div>
)    

export default HomePage