import React, { Component } from 'react';

//scss imports
import '../page_content_css/comment_item_component.scss';

function Comment_Item_Component(){

    return(
        <div className="col comment-item-container">
            <div className="comment-item">
                <div className="container">
                  <div className="row flex-center comment-item-row">
                    <div className="col-2 comment-item-column">
                      <div className="">
                          <div className="comment-profile-image"></div>
                          <div className="comment-profile-name">Name</div>
                      </div>
                    </div>
                    <div className="col-9 comment-item-column">
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                    <div className="col-1 comment-item-column">
                      Column
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );

}

export default Comment_Item_Component;