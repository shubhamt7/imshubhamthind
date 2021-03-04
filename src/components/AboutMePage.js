import React from 'react'
import Header from './Header'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuoteLeft, faQuoteRight, faHeart, faFile} from '@fortawesome/free-solid-svg-icons'

const AboutMePage=()=>(

    <div className="aboutmepage">
        <Header pagename={"About me"} link={"https://docdro.id/vHrzow3"}/>

        <div className="aboutpage__container">
            <div className="aboutpage__content">

            <FontAwesomeIcon className="left-quote-icon" icon={faQuoteLeft}/>
                
                <p>I'm Shubham Thind,  student of B.Tech CSE, final year,  from NIT Jalandhar. I hail from Jalandhar, Punjab</p>

                <p>In the past three years of my academic life at NITJ, I've learnt about various technologies and subjects of Computer Science.</p>

                <p>I hold a good grasp on various data structures and algorithms, Web development concepts using NodeJS and proficiency in various
                programming languages viz. C, C++ and Python.</p>

                <p>Currently, I'm learning ReactJS and this portfolio site is also built using ReactJS only.</p>

                <p>Apart from my academic life, I love reading books of various genres, and writing poetry in Hindi,Urdu and singing. 
                </p>

                <p id="resume">Check out my resume <a href="https://docdro.id/vHrzow3" target="_blank"><FontAwesomeIcon icon={faFile}/></a></p>
            
                <p>Thank you for visiting!</p>
                <FontAwesomeIcon className="right-quote-icon" icon={faQuoteRight}/>
            </div>
        </div>
        
    </div>

)

export default AboutMePage