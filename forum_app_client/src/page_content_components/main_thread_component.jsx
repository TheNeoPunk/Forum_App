//React imports
import { Link, BrowserRouter } from 'react-router-dom';  //import for page navigation
import React, { Component,  useState } from 'react';
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
                  <Link to="/createThread"><button className="create-thread-button">Create a Thread</button></Link>
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
                  <div className="col flex-center feed-container">
                    <div className="feed-item">
                      <div className="container ">
                        <div className="row">
                          <div className="col-1 like-dislike-container">
                              <div> <FontAwesomeIcon icon={faAngleUp} /></div>
                              <div> Number of Likes </div>
                              <div> <FontAwesomeIcon icon={faAngleDown} /></div>
                          </div>
                          <div class="col-11">
                            <div class="container feed-header">
                              <div class="row">
                                <div class="col-sm feed-title">
                                  Title
                                </div>
                                <div class="col-10">
                                  Space
                                </div>
                                <div class="col-sm">
                                  Time 
                                </div>
                              </div>
                            </div>
                            <div class="container">
                              <div class="row">
                                <div class="col">
                                 Author
                                </div>
                              </div>
                            </div>
                            <div class="container content-container">
                              <div class="row">
                                <div class="col">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                              </div>
                            </div>
                            <div class="container comment-container">
                              <div class="row">
                                <div class="col comment-column">
                                  <div>Comments</div>
                                  <div> <FontAwesomeIcon icon={faEllipsisH} /></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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