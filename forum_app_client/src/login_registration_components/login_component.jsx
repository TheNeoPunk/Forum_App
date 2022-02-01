import { Link, BrowserRouter } from 'react-router-dom';  //import for page navigation
import Logo from '../sub_components/Logo_Title';
import Axios from 'axios';
import Auth from './login_js/isAuthenticated';
import React, { Component, useState } from 'react';

//scss imports
import './login_register_css/login_component.scss';

function Login_Component(){

    //login existing user values initiated
  let [userLoginValues, setLoginValues] = useState({
    email: '',
    password: ''
  });

  //Grabs multiple input values into one function
  function handleLoginChange(event){
    event.preventDefault();
    
    let inputValue = event.target.value
    setLoginValues({
      ...userLoginValues,
      [event.target.name]: inputValue
    });
  }

  //Registry submission method
  function redirecToForum(event) {
    const {email, password} = userLoginValues
    event.preventDefault();
    console.log(email)
    Axios.post("http://localhost:3001/login", {

      //Assigns data from this path
      user_email: email, 
      user_pass: password

    }).then((response) => {

      console.log(response)

    });
  }

  return (
      <div className="App">
      <div className="flex-container flex-center flex-vertical">
        <Logo />
        <div>
          <div className='register-form-title'>
            <p>Please login</p>
          </div>
          <div><Link className='link' to="/register">Don't have an account? Make one</Link></div>
        </div>
        <form className="register-form" onSubmit={redirecToForum}>
          <div>
            <input className="email" type="email" name="email" placeholder='email' value={userLoginValues.email} onChange={ handleLoginChange}/><br />
            <input className="password" type="text" name="password" placeholder='password' value={userLoginValues.password} onChange={ handleLoginChange}/><br />
          </div>
          <div>
            <button className="Begin-Button" type="submit">Login</button>
          </div>
        </form>
      </div>
  </div>
  );
}
 
export default Login_Component;