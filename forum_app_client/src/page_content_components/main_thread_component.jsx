//React imports
import { Link, BrowserRouter, useLocation } from 'react-router-dom';  //import for page navigation
import React, { Component,  useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import '../App.scss';
import './page_content_css/main_feed.scss';

//Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

//Component imports
import NavBar from './sub_components/navigation_component';
import Filter_Content_Component from './sub_components/filter_content_component';

function Main_Feed_Component () {   

  const { state } = useLocation(); 
  console.log(state.existing_threads);

  let mounted = useRef(false);

  let [currThreads, setThreads] = useState([]);

  function updateThreadFeed(){

    Axios.get('http://localhost:3001/grabAllThreads').then(function(response) {  
      if(mounted && response.status == 200){
        const thread_res = response.data
        console.log(response.data);
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

  useEffect(() => {

    console.log(currThreads);

  }, [currThreads])

  function RenderFeedItem(props){

    var total_thread_items = [];
    //console.log(props.loadThread[1]);
    for(var i = 0; i < props.loadThread[0].length; i++){

      total_thread_items.push(
        <div className="feed-item">
          <div className="container ">
            <div className="row">
              <div className="col-1 like-dislike-container">
                  <div> <FontAwesomeIcon icon={faAngleUp} /></div>
                  <div> {props.loadThread[0][i].like_numbers} </div>
                  <div> <FontAwesomeIcon icon={faAngleDown} /></div>
              </div>
              <div className="col-11">
                <div className="container feed-header">
                  <div className="row">
                    <div className="col-2 feed-title">
                    {props.loadThread[0][i].thread_title}
                    </div>
                    <div className="col-7">
                      Space
                    </div>
                    <div className="col">
                    {props.loadThread[0][i].thread_date}
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                    {props.loadThread[0][i].thread_owner}
                    </div>
                  </div>
                </div>
                <div className="container content-container">
                  <div className="row">
                    <div className="col">
                    {props.loadThread[0][i].thread_content}
                    </div>
                  </div>
                </div>
                <div className="container comment-container">
                  <div className="row">
                    <div className="col comment-column">
                      <div>Comments</div>
                      <div> <FontAwesomeIcon icon={faEllipsisH} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    }

    return total_thread_items;

  }

  return(
    <div>
        <NavBar />
        {/********************************************** */}
        <div className="container">
          <div className="row">
            <div className="col sub-title flex-center">
              Welcome to The Forum
            </div>
          </div>
        </div>  
        {/********************************************** */}
        <div className="container-fluid ">
          <div className="row side-nav-row">
            {/********************************************** */}
            <div className="col side-nav">
              <div className="flex-vertical flex-center">
                <div className='create-thread-button-container'>
                  <Link to="/createThread" state={{existing_threads: currThreads}}><button className="create-thread-button">Create a Thread</button></Link>
                </div>
                <div className="side-nav-item flex-center">Item</div>
                <div className="side-nav-item flex-center">Item</div>
                <div className="side-nav-item flex-center">Item</div>
                <div className="side-nav-item flex-center">Item</div>
              </div>
            </div>
            {/********************************************** */}
            <div className="col-9" style={{backgroundColor: "#F8F8F8"}}>
              <div className="container">
                <Filter_Content_Component />
                {/********************************************** */}
                <div className="row">
                  <div className="col flex-center feed-container flex-vertical">
                    <RenderFeedItem loadThread={state.existing_threads}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
    </div>
  );
}

export default Main_Feed_Component;