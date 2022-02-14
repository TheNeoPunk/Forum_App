import React, { Component } from 'react';

//Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


function Filter_Content_Component(){

    return(
    <div className="row">
        <div className="col filter-bar-item flex-center">
          <div className="filter-item">Refresh</div>
          <div className='filter-item'>Latest</div>
        </div>
        <div className="col filter-bar-item flex-center">
          <div className="feed-pagentation">
            <div><FontAwesomeIcon icon={faAngleLeft} /></div>
            <div>Number</div>
            <div><FontAwesomeIcon icon={faAngleRight} /></div>
          </div>
        </div>
        <div className="col filter-bar-item flex-center">
          <div className=""></div>
        </div>
    </div>
    );
    
}

export default Filter_Content_Component;