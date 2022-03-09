import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';  //import for page navigation

//scss imports
import '../page_content_css/navigation_component.scss'
import '../../App.scss';

//Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser} from '@fortawesome/free-solid-svg-icons'

function NavBar() {

    return (
        <div className="nav-bar">
            <div className="container-fluid">
              <div className="row">
                <div className="col nav-item">

                  <Link className="nav-link" to="/main_feed">The Forum</Link>

                </div>
               
                <div className="col-10 nav-item nav-search">
              
                  <div>
                    <input className="search-bar" type="text"></input>
                  </div>
                  <div> 
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                
                </div>
              
                <div className="col nav-item">
                
                  <FontAwesomeIcon icon={faUser} />
              
                  
                </div>
              </div>
            </div>
        </div>
    );
}

export default NavBar;