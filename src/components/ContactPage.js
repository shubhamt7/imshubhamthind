import React from 'react'
import Header from './Header'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faWhatsapp, faGoogle} from '@fortawesome/free-brands-svg-icons'

const ContactPage=()=>(

    <div className="contactpage">

        <Header pagename={"Contact me"} subtitle={"Suggestions or feedback are welcome!"}/>

        <div className="contactpage__container">
            <div className="contactpage__container__item">
            LinkedIn <FontAwesomeIcon icon={faLinkedin}/> 
            &nbsp;   <a className="social-link" href="https://www.linkedin.com/in/shubham-thind-36133214b" target="_blank">shubham-thind-36133214b</a>
            </div>
            <div className="contactpage__container__item">
            Phone <FontAwesomeIcon icon={faWhatsapp}/> 
            &nbsp;  +91-7814832915, +91- 6239853231
            </div>
            <div className="contactpage__container__item">
            Send Email <FontAwesomeIcon icon={faGoogle} />
            &nbsp;  <a className="social-link" href="mailto:shubhamthind7@gmail.com" target="_blank">shubhamthind7@gmail.com</a>
            </div>
            <div className="contactpage__container__item">
            Check my Github <FontAwesomeIcon icon={faGithub} />
            &nbsp; <a className="social-link" href="https://github.com/shubhamt7/" target="_blank">shubhamt7</a>
            </div>
           
        </div>
        
    </div>
)

export default ContactPage