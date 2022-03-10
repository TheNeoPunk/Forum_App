import React, { Component, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';  //import for page navigation
import Axios from 'axios';

//scss imports
import '../page_content_css/navigation_component.scss'
import '../../App.scss';

//Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser} from '@fortawesome/free-solid-svg-icons'

function NavBar() {

  const { state } = useLocation();
  //.console.log(state.existing_threads);

  let [currThreads, setThreads] = useState([]);

  function refreshFeed(){
    Axios.get('http://localhost:3001/grabAllThreads').then(function(response) {  
      console.log(response.data)
      setThreads([currThreads, response.data]);
      console.log(currThreads);
    });
    
  }

  return (
      <div className="nav-bar">
          <div className="container-fluid">
            <div className="row">
              <div className="col nav-item">
                <Link className="nav-link" to="/main_feed" onClick={refreshFeed} state={{existing_threads: state.existing_threads}} >The Forum</Link>
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