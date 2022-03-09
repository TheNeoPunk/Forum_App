import React, { Component } from 'react';

function Main_Feed_Component(){

    return(
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
    )
};

export default Main_Feed_Component;