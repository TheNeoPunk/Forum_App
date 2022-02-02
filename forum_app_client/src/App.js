//REACT imports
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';  //import for page navigation

//scss imports
import './App.scss';

//Component imports
import Register_Component from './login_registration_components/register_component';
import Landing_Component from './landing_component';
import Login_Component from './login_registration_components/login_component';
import Main_Feed_Component from './page_content_components/main_thread_component';
import ProtectRoute from './login_registration_components/protected_route';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          
          <Route path="/" exact element={<Landing_Component />} />
          <Route path="/register" element={<Register_Component />} />
          <Route path="/login" element={<Login_Component />} />
          <Route path="/main_feed" element={
            <ProtectRoute>
              <Main_Feed_Component />
            </ProtectRoute>} 
          />

        </Routes>
      </Router>
   </React.Fragment>
  );
}

export default App;
