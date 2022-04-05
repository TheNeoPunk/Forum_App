import React, { Component, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Axios from 'axios';

//Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons'


//scss imports
import '../../App.scss';
import '../page_content_css/edit_post_component.scss';

function Edit_Post_Component(props){

    let enablePost = true;

    let [valuesToEdit, setNewValues] = useState({
          title: '',
          content: ''
    });
    
    let [authRedirAfterUpdate, setRedirAfterUpdate] = useState(false);

    useEffect(()=>{

      console.log(props.currThreadData);

    });

    function handlePostChange(event){
      
      event.preventDefault();
      let inputValue = event.target.value
      setNewValues({
        ...valuesToEdit,
        [event.target.name]: inputValue
      });

    }

    function handleSubmitChange(event){
      event.preventDefault();
      const {title, content} = valuesToEdit;
      Axios.post('http://localhost:3001/updateCurrPost', {

        currId: props.currThreadData[0],
        currTitle: title,
        currContent: content

      }).then((res, err)=>{
        if(err){
          console.log(err);
        }else if(res){
          console.log(res);
          setRedirAfterUpdate(true);
          console.log(authRedirAfterUpdate)
        }
      });
      
    }

    if(authRedirAfterUpdate){
      console.log('We are redirecting now', authRedirAfterUpdate)
      return <Navigate 
        to={{
          pathname: '/postThread'
        }}
        state={{
          curr_thread_id: props.currThreadData[0],
          curr_thread_likes: props.currThreadData[1], 
          curr_thread_title: valuesToEdit.title, 
          curr_thread_date: props.currThreadData[3], 
          curr_thread_owner: props.currThreadData[4], 
          curr_thread_content: valuesToEdit.content,
          curr_thread_comments: props.currThreadData[6]
        }}
      />

    }

    return (
      <div className="">
        <Modal show={enablePost}>
          <div className="text-center mt-4"><h2>Edit this post here</h2></div>
          <form onChange={handlePostChange} onSubmit={handleSubmitChange} className="d-flex flex-column w-100 justify-content-center">
            <div className="w-100 p-5 d-flex flex-column">
              <div className="mt-2">
                <h4>Title</h4>
                <input className="w-100 p-2" name="title" type="text"/>
              </div>
              <div className="mt-2">
                <h4>Content</h4>
                <textarea className="w-100 p-2" name="content" type="text"/>
              </div>
            </div>
            <div className="w-100 p-5">
              
              <Button variant="primary p-2" className="w-50" type="submit">
                Save Changes
              </Button>
              <Button variant="secondary p-2" className="w-50" onClick={props.closeModal}>
                Close
              </Button>
            </div>
            
          </form>
           
        </Modal>
      </div>
    );

}

export default Edit_Post_Component;