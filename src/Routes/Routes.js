import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from '../History/history';
import Login from '../Common-Components/Login/Login'
import Signup from '../Common-Components/Signup/Signup'
import Home from '../Pages/Home/Home'
import Contactus from '../Pages/Contact-us/ContactUs'
import View from '../Pages/View/View'

export default class Routes extends Component {
    render () {
        return (
            <Router history={history}>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Signup" component={Signup} />
                <Route path="/Home" component={Home} />
                <Route path="/Contactus" component={Contactus} />
                <Route path="/View" component={View} />
            </Switch>
        </Router>
        )
    }
}