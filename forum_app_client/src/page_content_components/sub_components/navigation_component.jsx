import React, { Component, useState, useEffect, useRef } from 'react';
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

  let mounted = useRef(false);

  // API request for all thread feeds
  function updateThreadFeed(){

    Axios.get('http://localhost:3001/grabAllThreads').then(function(response) {  
      if(mounted && response.status == 200){
        const thread_res = response.data;
        setThreads([...currThreads, thread_res]);
      }else{
        console.log('not mounted')
      }
    }); 
    
  }

  //When web page mounts
  useEffect(() => {

    mounted.current = true;

    updateThreadFeed();

  }, []);

  useEffect(() => {

    console.log(currThreads);

  }, [currThreads])

  return (
      <div className="nav-bar">
          <div className="container-fluid">
            <div className="row">
              <div className="col nav-item">
                <Link className="nav-link" to="/main_feed" state={{existing_threads: currThreads}} >The Forum</Link>
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