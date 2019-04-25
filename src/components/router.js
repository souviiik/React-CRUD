import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Signup from '../containers/Signup';
import Signin from '../containers/Signin';
import Header from './common/Header';
import Footer from './common/Footer';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />                
            <div className="container">
                <Switch>
                    {/* <Route path="/posts/new" component={PostsNew}/>
                    <Route path="/posts/:id" component={PostsShow} /> */}
                    <Route path="/signup" component={Signup}/>
                    <Route path="/signin" component={Signin}/>
                    <Route path="/" component={Home}/>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default Router;
