import React from 'react'
//import {Switch, Route} from 'react-router-dom'
import LoginButton from '../Authentication/LoginButton'
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import ListAllCocktails from '../ViewCocktails/ListAllCocktails'
import CustomCoctails from '../CustomCocktail/CustomCocktail'
import UserProfile from '../Authentication/UserProfile'
import { BrowserRouter as Router, Route, Link, Switch  } from "react-router-dom"

const PageRouter = () => {
    return (

            <Switch>            
                <Route exact path="/">
                    <HomePage />
                </Route>
               

                <Route path="/ListAllCocktails">
                    <ListAllCocktails />
                </Route>

                
                <Route path="/CustomCoctails">
                    <CustomCoctails />
                </Route>
               
               
                <Route path="/AboutUs">
                    <AboutUs />
                </Route>
                

                <Route path="/UserProfile">
                    <UserProfile />
                </Route>
                
            
            </Switch>
        
    )
}

export default PageRouter