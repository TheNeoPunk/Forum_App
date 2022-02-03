//React imports
import { Link, BrowserRouter } from 'react-router-dom';  //import for page navigation
import React, { Component,  useState } from 'react';
import Axios from 'axios';
import '../App.scss';
import './page_content_css/main_feed.scss';

//Component imports
import NavBar from './sub_components/navigation_component';

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
                    <button className="create-thread-button">Create a Thread</button>
                  </div>
                  <div className="side-nav-item flex-center">Item</div>
                  <div className="side-nav-item flex-center">Item</div>
                  <div className="side-nav-item flex-center">Item</div>
                  <div className="side-nav-item flex-center">Item</div>
                </div>
              </div>
              {/********************************************** */}
              <div className="col-9">
                <div className="container">
                  <div className="row">
                    <div className="col filter-bar-item flex-center">
                      <div className="filter-item">Refresh</div>
                      <div className='filter-item'>Latest</div>
                    </div>
                    <div className="col-8 filter-bar-item flex-center">
                      <div className="">Column</div>
                    </div>
                    <div className="col filter-bar-item flex-center">
                      <div className=""></div>
                    </div>
                  </div>
                  {/********************************************** */}
                  <div className="row">
                    <div className="col flex-center feed-container">
                      <div className="feed-item">
                        <div class="container">
                          <div class="row">
                            <div class="col">
                              Column
                            </div>
                            <div class="col-11">
                              <div class="container">
                                <div class="row">
                                  <div class="col-sm">
                                    One 
                                  </div>
                                  <div class="col-10">
                                    One of three columns
                                  </div>
                                  <div class="col-sm">
                                    One 
                                  </div>
                                </div>
                              </div>
                              <div class="container">
                                <div class="row">
                                  <div class="col">
                                    One of three columns
                                  </div>
                                </div>
                              </div>
                              <div class="container">
                                <div class="row">
                                  <div class="col">
                                    One of three columns
                                  </div>
                                </div>
                              </div>
                              <div class="container">
                                <div class="row">
                                  <div class="col">
                                    One of three columns
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