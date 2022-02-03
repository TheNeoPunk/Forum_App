//React imports
import { Link, BrowserRouter } from 'react-router-dom';  //import for page navigation
import React, { Component,  useState } from 'react';
import Axios from 'axios';

//Component imports
import NavBar from './sub_components/navigation_component';

function Main_Feed_Component () {    

    return(
        
        <div>
            <NavBar />
            {/********************************************** */}
            <div class="container sub-title">
              <div class="row">
              
                <div class="col">
                  Column
                </div>
                
              </div>
            </div>  
            <div class="container">
              <div class="row">
                <div class="col">
                  Column
                </div>
                <div class="col">
                  Column
                </div>
                <div class="col">
                  Column
                </div>
              </div>
            </div>  
        </div>

    );

}

export default Main_Feed_Component;