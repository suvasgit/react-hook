import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home';
import Offer from './components/Offer';
import Signup from './components/user/Signup';
import Signin from './components/user/Signin';
import Deals from './components/Deals';
import Contact from './components/Contact';

const Routes=()=> {
    return (
       <Router>
           <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/offer" component={Offer}/>
           <Route exact path="/deals"  component={Deals}/>
           <Route exact path="/contact" component={Contact}/>
           <Route exact path="/signup" component={Signup}/>
           <Route exact path="/signin" component={Signin}/>
           </Switch>
       </Router>
    )
}

export default Routes
