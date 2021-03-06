//React imports
import { Link, BrowserRouter, Redirect, Navigate } from 'react-router-dom';  //import for page navigation
import React, { Component,  useState, useRef, useEffect } from 'react';
import Axios from 'axios';
import Auth from './login_js/isAuthenticated';
import pass_check from './incorrect_pass';

//Sub function component imports
import Logo from '../sub_components/Logo_Title';

//scss import 
import './login_register_css/register_component.scss';
import '../App.scss';

function Register_Component(){

  //Register user values initiated
  let [userValues, setUserValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  let [passNoMatchMessage, setMatchMssg] = useState(null);
  let [authToRedir, setAuth] = useState(false);

  let [currThreads, setThreads] = useState([]);
  let mounted = useRef(false);

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

  function updateThreadFeed(){

    Axios.get('http://localhost:3001/grabAllThreads').then(function(response) {  
      if(mounted && response.status == 200){
        const thread_res = response.data
        setThreads([...currThreads, thread_res]);
      }else{
        console.log('not mounted')
      }
    }); 
    
  }

  useEffect(() => {

    mounted.current = true;
    //console.log('mounted');

    updateThreadFeed();

  }, []);

  //Registry submission method
  function redirecToForum(event) {

    const { username, email, password, confirmPassword } = userValues
    event.preventDefault()
    
    if(password === confirmPassword){

      Axios.post("http://localhost:3001/register", {

        //Assigns data from this path
        user_name: username, 
        user_email: email, 
        user_pass: password,  
        user_confirm: confirmPassword 

      }).then((res, err) => {

        if(err){
          console.log(err)
        }else{
          Auth.login();
          setAuth(Auth.isAuthenticated())
          console.log(res)
        }
      });
    }else if(password !== confirmPassword){
      setMatchMssg('Passwords do not match');
    }
  }

  if(Auth.isAuthenticated() == true){
    return <Navigate 
      to={{
        pathname: "/main_feed"
      }}
      state={{existing_threads: currThreads}} 
    />
  }

  return (
      <div className="App">
          <div className="flex-container flex-center flex-vertical">
            <div className="col-10 no-match-pass-div rounded-3">
              <p className="text-danger fw-bold no-match-message">{passNoMatchMessage} </p>
            </div>   
            <Logo />
            <div>
              <div className='register-form-title'>
                <p>Create an account</p>
              </div>
              <div><Link className='link' to="/login">Already have one? Login</Link></div>
            </div>
            {/*-------REGISTER FORM ----------- */}
            <form className="register-form" onSubmit={redirecToForum}>
              <div>
                {/* values become the state declared values in useState constructor */}
                  <input className="user" name="username" type="text" placeholder='user' value={userValues.username} onChange={handleChange}/><br />
                  <input className="email" name="email" type="email" placeholder='email' value={userValues.email} onChange={handleChange}/><br />
                  <input className="password" name="password" type="text" placeholder='password' value={userValues.password} onChange={handleChange}/><br />
                  <input className="password-confirm" name="confirmPassword" placeholder='confirm password' value={userValues.confirmPassword} onChange={handleChange} type="text"/>
              </div>
              <div>
                <button className="Begin-Button" type="submit">Register</button>
              </div>
            </form>
          </div>
      </div>
  );
}


 
export default Register_Component;