import React, { Component } from 'react';
import Axios from 'axios';
import { Link, BrowserRouter, Navigate, useLocation } from 'react-router-dom';  //import for page navigation

//Component imports
import NavBar from './sub_components/navigation_component';

//scss imports
import '../App.scss';
import './page_content_css/create_thread_component.scss'
import { useState } from 'react';

//classic js imports
import AuthPost from './page_content_js/post_render_auth';

function Create_Thread_Component(){

  let [threadContent, setThread] = useState(
    {
      title: '',
      content: ''
    }
  );

  let [authPost, setPost] = useState(false);

  const { state } = useLocation();
  //console.log(state.existing_threads);

  function handleThreadInput(event){
    event.preventDefault();
    let inputValue = event.target.value
    setThread({
      ...threadContent,
      [event.target.name]: inputValue
    });
  }

  function submitThread(){
    const {title, content} = threadContent;
    Axios.post('http://localhost:3001/createThread', {

      thread_title: title,
      thread_content: content,
      thread_owner: localStorage.getItem('user_name')

    }).then(function(res, err){
      if(err){
        console.log(err);
      }else{
        console.log(res);
        AuthPost.post();
        setPost(AuthPost.isPostAuthorized());
      }
    });
  }

  if(authPost == true){
    return <Navigate 
              to={{pathname: "/postThread"}} 
              state={{existing_threads: state.existing_threads}}
            />
  }

  return (
      <React.Fragment>
          <div>
              <NavBar />
              <div className="container">
                <div className="row">
                  <div className="col sub-title flex-center">
                    Share Your Thoughts
                  </div>
                </div>
              </div>  
              <div className="container create-thread-container">
                <div className="row create-thread-row">
                  <div className="col-8">
                    <form>
                      <div className='thread-item'>
                        <p>Title</p>
                        <input type="text" name="title" onChange={handleThreadInput}/>
                      </div>
                      <div className='thread-item'>
                        <p>Title</p>
                        <textarea type="text" name="content" onChange={handleThreadInput}/>
                      </div>
                      <div className='thread-item '>
                        <button className="thread-button" name="content" type="button" onClick={submitThread}><h5>Hello World</h5></button>
                      </div>
                    </form>
                  </div>
                  <div className="col-3">
                    <div>Share your ideas, thoughts, or questions</div>
                  </div>
                </div>
              </div>
          </div>
      </React.Fragment>
  );
}

export default Create_Thread_Component;