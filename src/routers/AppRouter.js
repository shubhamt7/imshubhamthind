import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import HomePage from '../components/HomePage'
import ContactPage from '../components/ContactPage'
import PortfolioPage from '../components/Portfolio'
import NotFoundPage from '../components/NotFoundPage'
import PortfolioItemPage from '../components/PortfolioItem'
import AboutMePage from '../components/AboutMePage'

const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/about" component={AboutMePage} />
                <Route path="/contact" component={ContactPage}/>
                <Route path="/portfolio/:id" component={PortfolioItemPage}/>
                <Route path="/portfolio" component={PortfolioPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        
        </div>
    </BrowserRouter>
)

export default AppRouter