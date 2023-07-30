import React from 'react'
import {NavLink} from 'react-router-dom'
import Header from './Header'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faChrome} from '@fortawesome/free-brands-svg-icons'

const PortfolioPage= ()=> (
    <div className="portfoliopage">
        <Header pagename={"My projects"} subtitle={"Hover over or click on the projects for details"}/>
        <div className="projects_container">
            <div className="project_item">

                <div className="card">
                    <div className="front">
                        <div className="front__details">
                            <h3 className="project__title">Contactless ATM</h3>
                            <p className="project__description">
                            An ATM system controllable by object detection based virtual keyboard
                            </p>
                            <p className="see_detail_link">See more</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back__details">
                            
                            <p>Technologies used:</p>
                            <ul className="technology_list">
                                <li>Python</li>
                                <li>OpenCV python</li>
                            </ul>

                            <p><FontAwesomeIcon icon={faChrome}/> <a className="project__link" href="https://github.com/shubhamt7/CATM-final-year-project" target="_blank">See app</a></p>
                            </div>
                    
                    </div>
                    
                </div>
            </div>
            <div className="project_item">

                <div className="card">
                    <div className="front">
                        <div className="front__details">
                            <h3 className="project__title">Magical Calculator</h3>
                            <p className="project__description">
                            A calculator controllable by object detection based virtual keyboard.
                            </p>
                            <p className="see_detail_link">See more</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back__details">
                            
                            <p>Technologies used:</p>
                            <ul className="technology_list">
                                <li>Python</li>
                                <li>OpenCV python</li>
                            </ul>

                            <p><FontAwesomeIcon icon={faChrome}/> <a className="project__link" href="https://github.com/shubhamt7/CalculatorOpenCV" target="_blank">See app</a></p>
                            </div>
                    
                    </div>
                    
                </div>
            </div>

            <div className="project_item">

                <div className="card">


                    <div className="front">
                        <div className="front__details">
                            <h3 className="project__title">KnoWeather app</h3>
                            <p className="project__description">A weather forecasting web-app
                               which takes user location as
                               input and returns forecast
                               result for that location.
                            </p>
                            <p className="see_detail_link">See more</p>
                        </div>
                    </div>



                    <div className="back">
                        
                        <div className="back__details">
                        
                        <p>Technologies used:</p>
                        <ul className="technology_list">
                            <li>NodeJS</li>
                            <li>Mapbox api</li>
                            <li>Darksky api</li>

                        </ul>

                       <p><FontAwesomeIcon icon={faChrome}/> <a className="project__link" href="https://knoweather-by-shubham.herokuapp.com/" target="_blank">See app</a></p>
                        </div>

                    </div>
                    
                </div>
            </div>


            <div className="project_item">

                <div className="card">
                    <div className="front">
                        <div className="front__details">
                            <h3 className="project__title">ChitChat</h3>
                            <p className="project__description">
                            A chatting app in which users 
                            can join chat-rooms by entering custom
                            room-names and chat. No auth required.
                            </p>
                            <p className="see_detail_link">See more</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back__details">
                            
                            <p>Technologies used:</p>
                            <ul className="technology_list">
                                <li>NodeJS</li>
                                <li>Socket.io library</li>
                                <li>Bootstrap 4</li>
                            </ul>

                            <p><FontAwesomeIcon icon={faChrome}/> <a className="project__link" href="https://chitchat-by-shubhamthind.herokuapp.com" target="_blank">See app</a></p>
                            </div>
                    
                    </div>
                    
                </div>
            </div>
            <div className="project_item">

                <div className="card">
                    <div className="front">
                        <div className="front__details">
                            <h3 className="project__title">MediCity app</h3>
                            <p className="project__description">
                            A CRUD app containing names, addresses and
                            contacts of various hospitals.
                            Has authentication feature also.
                            </p>
                            <p className="see_detail_link">See more</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back__details">
                            
                        <p>Technologies used:</p>
                        <ul className="technology_list">
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>Bootstrap 4</li>
                            <li>MongoDB</li>
                        </ul>

                        <p><FontAwesomeIcon icon={faChrome}/> <a className="project__link" href="http://medicity-jalandhar.herokuapp.com/" target="_blank">See app</a></p>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>   
)

export default PortfolioPage