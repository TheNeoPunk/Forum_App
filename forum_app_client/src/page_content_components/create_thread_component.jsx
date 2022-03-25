import React, { Component, useEffect } from 'react';
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

  //User input for new thread for POST request
  let [threadContent, setThread] = useState(
    {
      title: '',
      content: ''
    }
  );

  //Post info after creation AFTER GET request
  let [postJustCreated, setNewPost] = useState(
    {
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
    console.log(threadContent.title);
  }

  useEffect(()=>{

   

  }, []);

  function submitThread(){

    const {title, content} = threadContent;

    //Axios creates the POST request
    Axios.post('http://localhost:3001/createThread', {

      thread_title: title,
      thread_content: content,
      thread_owner: localStorage.getItem('user_name')

    }).then(function(res, err){
      if(err){
        console.log(err);
      }else{
        console.log(res);
      }

      //Grab thread info just created and send to the singular post page for view
      Axios.get('http://localhost:3001/getLatestThread', {
        params: {
          latest_thread_name: threadContent.title
        }
      }).then((response) => {

        //console.log(response.data[0].id);
        setNewPost({...postJustCreated, 
          id: response.data[0].id,
          thread_owner: response.data[0].thread_owner,
          thread_content: response.data[0].thread_content,
          thread_title: response.data[0].thread_title,
          thread_comments: response.data[0].thread_comments,
          like_numbers: response.data[0].like_numbers,
          thread_date: response.data[0].thread_date
        });
  
        AuthPost.post();
        setPost(AuthPost.isPostAuthorized());

      });
    });
  }

  if(authPost == true){

   
    return <Navigate 
              to={{pathname: "/postThread"}} 
              state={{
                curr_thread_id: postJustCreated.id,
                curr_thread_likes: postJustCreated.like_numbers, 
                curr_thread_title: postJustCreated.thread_title, 
                curr_thread_date: postJustCreated.thread_date, 
                curr_thread_owner: postJustCreated.thread_owner, 
                curr_thread_content: postJustCreated.thread_content,
                curr_thread_comments: postJustCreated.thread_comments
              }}
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