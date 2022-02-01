import { Link, BrowserRouter } from 'react-router-dom';  //import for page navigation
import Logo from '../sub_components/Logo_Title';
import React, { Component, useState } from 'react';

//scss imports
import './login_register_css/login_component.scss';

function Login_Component(){

    //login existing user values initiated
  let [userValues, setUserValues] = useState({
    email: '',
    password: ''
  });

  //Grabs multiple input values into one function
  function handleChange(event){
    event.preventDefault();
    let inputValue = event.target.value
    setUserValues({
      ...userValues,
      [event.target.name]: inputValue
    });
    console.log(userValues)
  }

  //Registry submission method
  function redirecToForum(event) {

    const {email, password} = userValues
    event.preventDefault()

   /* Axios.post("http://localhost:3001/login", {

      //Assigns data from this path
      user_email: email, 
      user_pass: password,  
    });*/
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
            <input className="email" type="text" placeholder='email' value={userValues.email} onChange={handleChange}/><br />
            <input className="password" type="text" placeholder='password' value={userValues.password} onChange={handleChange}/><br />
          </div>
          <div>
            <button className="Begin-Button">Login</button>
          </div>
        </form>
      </div>
  </div>
  );
}
 
export default Login_Component;