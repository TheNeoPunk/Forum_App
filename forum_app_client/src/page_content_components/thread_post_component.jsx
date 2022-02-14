import React, { Component } from 'react';
import { Link, BrowserRouter, Navigate } from 'react-router-dom';  //import for page navigation

//Component imports
import NavBar from './sub_components/navigation_component';
import Filter_Content_Component from './sub_components/filter_content_component';
import Comment_Item_Component from './sub_components/comment_item_component';

//Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

//scss imports
import './page_content_css/thread_post_component.scss';
import '../App.scss';

function Thread_Post_Component(){

    return(
        <React.Fragment>
            <NavBar />
            <div className="thread-post-container">
                <div className="container">
                  <div className="row">
                    <div className="col-1">
                      Column
                    </div>
                    <div className="col-10">
                        <div className="feed-item">
                            <div className="container ">
                              <div className="row">
                                <div className="col-1 like-dislike-container">
                                    <div> <FontAwesomeIcon icon={faAngleUp} /></div>
                                    <div> Number of Likes </div>
                                    <div> <FontAwesomeIcon icon={faAngleDown} /></div>
                                </div>
                                <div className="col-11">
                                  <div className="container feed-header">
                                    <div className="row">
                                      <div className="col-sm feed-title">
                                        Title
                                      </div>
                                      <div className="col-10">
                                        Space
                                      </div>
                                      <div className="col-sm">
                                        Time 
                                      </div>
                                    </div>
                                  </div>
                                  <div className="container">
                                    <div className="row">
                                      <div className="col">
                                       Author
                                      </div>
                                    </div>
                                  </div>
                                  <div className="container content-container">
                                    <div className="row">
                                      <div className="col">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                      </div>
                                    </div>
                                  </div>
                                  <div className="container comment-container">
                                    <div className="row">
                                      <div className="col comment-column">
                                        <div> <FontAwesomeIcon icon={faEllipsisH} /></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div className="container comment-button-container">
                          <div className="row">
                            <div className="col">
                              Column
                            </div>
                            <div className="col-9 flex-center flex-column">
                              <div><button className='comment-button'>comment</button></div>
                             
                              <div className="container">
                                <div className="row">
                                  <div><Filter_Content_Component /></div>
                                  <Comment_Item_Component />
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              Column
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="col-1">
                      Column
                    </div>
                  </div>
                </div>
            </div>
            
         
        </React.Fragment>
    );
    

}

export default Thread_Post_Component;