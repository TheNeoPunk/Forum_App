import React, { Component } from 'react';
import '../page_content_css/navigation_component.scss'
import '../../App.scss';

function NavBar() {

    return (
        <div className="nav-bar">
            <div className="container-fluid">
              <div className="row">
                <div className="col nav-item">

                  <div className="">Item</div>

                </div>
               
                <div className="col-10 nav-item">
              
                  <div className="">Item</div>
                
                </div>
              
                <div className="col nav-item">
                
                  <div className="">Item</div>
                  
                </div>
              </div>
            </div>
        </div>
    );
}

export default NavBar;