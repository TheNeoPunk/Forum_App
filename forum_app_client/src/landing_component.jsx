import { Link, BrowserRouter } from 'react-router-dom';  //import for page navigation
import Logo from './sub_components/Logo_Title';
import React, { Component } from 'react';
import Axios from 'axios';

function Landing_Component(){

    return (

        <div className="App">
            <div className="flex-container flex-center flex-vertical">
              <div className='flex-grow-1'></div>
              <p id="welcome-to">Welcome To </p>
              <Logo />
              <Link to="/register"><button className="Begin-Button">BEGIN</button></Link>
              <div className='flex-grow-1'></div>
            </div>
        </div>

    );
}


 
export default Landing_Component;
    