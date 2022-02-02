import { rest } from 'lodash';
import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch ,Route, Navigate} from 'react-router-dom';  //import for page navigation
import Auth from './login_js/isAuthenticated';
import Main_Feed_Component from '../page_content_components/main_thread_component';

//Takes in children element of <ProtectRoute>
function ProtectRoute({ children }){
    
    console.log('hello')
    console.log(children);
    //Return a specific route with its props
    if(Auth.authenticated){
        return children
    }else{
        return Auth.authenticated ? children : <Navigate to="/" />;
    }
    
}

export default ProtectRoute;
