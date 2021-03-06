import React, { Component, useState, useEffect } from 'react';
import { Link, BrowserRouter, Navigate, useLocation } from 'react-router-dom';  //import for page navigation
import Axios from 'axios';

//Component imports
import NavBar from './sub_components/navigation_component';
import Filter_Content_Component from './sub_components/filter_content_component';
import Comment_Item_Component from './sub_components/comment_item_component';
import Edit_Post_Component from './sub_components/edit_post_component';

//Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

//scss imports
import './page_content_css/thread_post_component.scss';
import '../App.scss';

function Thread_Post_Component(){

  let { state } = useLocation();
  console.log( state );

  let [thread_comments, setComments] = useState([]);
  let [showEditWidget, setEditWidget] = useState(false);
  let [renderPostOptions, setPostOptions] = useState(false);

   //Looks for comments and renders accordingly
  function renderCommentSection(comment_array){
  
    if(comment_array.length == 0){
      
      return(
        <div>
          There are no comments for this post
        </div>
      );

    }else if(comment_array.length > 0){


     
    }
    
  }

  useEffect(() => {

    var loggedUser = localStorage.getItem('user_name');
    var postOwner = state.curr_thread_owner;

    //On mount, check if the logged User matches with owner of post
    if(postOwner == loggedUser){
      setPostOptions(true);
      console.log(renderPostOptions);
    }else{
      setPostOptions(false)
      console.log(renderPostOptions)
    }

  });

  //Displays options to delete or edit post of user
  function ThreadOptions(props){

    let enableThreadOption = props.toggleThreadOptions;
    let [enableEditModal, setEditModal] = useState(false);

    //API request to delete a post query
    function deletePost(){
      console.log(state.curr_thread_id);
      Axios.delete('http://localhost:3001/deleteCurrThread/' + state.curr_thread_id).then(function(err, res){
        console.log(res);
      });
    }

    function enableEditPost(){
      
      setEditModal(true);
      console.log(enableEditModal);
      
    }  

    function disableEditPost(){

      setEditModal(false);

    }

    function EditModal(){

      if(enableEditModal == true){

        return(<Edit_Post_Component currThreadData={[state.curr_thread_id, state.curr_thread_likes,state.curr_thread_title, state.curr_thread_date, state.curr_thread_owner, state.curr_thread_content, state.curr_thread_comments]} closeModal={disableEditPost}/>);

      }else if(enableEditModal == false){

        return(<div className="d-none">No world</div>);
      }

    }

    /*---------------------- Disables or enables render of post edit options --------------------------*/

    if(enableThreadOption == false){

      return(

        <div></div>
      );

    }else if(enableThreadOption == true){

      return(
        
        <div className="">
          
          <EditModal />
          <div onClick={()=>{ 
          
           setEditWidget(false)
          
          }}>mCthingy</div>
          <div onClick={enableEditPost}>Edit</div>
          <div onClick={deletePost}>Delete</div>

        </div>
        
      );

    }
    
  }

  return(
      <React.Fragment>
          <NavBar />

          {/* ------ Thread Post--------- */}
          <div className="thread-post-container">
              <div className="container">
                <div className="row">
                  <div className="col-1">
                   
                  </div>
                  <div className="col-10">
                      <div className="feed-item">
                          <div className="container ">
                            <div className="row">
                              <div className="col-1 like-dislike-container">
                                  <div> <FontAwesomeIcon icon={faAngleUp} /></div>
                                  <div> {state.curr_thread_likes} </div>
                                  <div> <FontAwesomeIcon icon={faAngleDown} /></div>
                              </div>
                              <div className="col-11">
                                <div className="container feed-header">
                                  <div className="row">
                                    <div className="col-1 feed-title">
                                      {state.curr_thread_title}
                                    </div>
                                    <div className="col-7">
                                      Space
                                    </div>
                                    <div className="col-sm">
                                      {state.curr_thread_date}
                                    </div>
                                  </div>
                                </div>
                                <div className="container">
                                  <div className="row">
                                    <div className="col">
                                      {state.curr_thread_owner}
                                    </div>
                                  </div>
                                </div>
                                <div className="container content-container">
                                  <div className="row">
                                    <div className="col">
                                      {state.curr_thread_content}
                                    </div>
                                  </div>
                                </div>
                                <div className="container comment-container">
                                  <div className="row">
                                    <div className="col comment-column">
                                      {renderPostOptions ?  
                                      <div>
                                        <div> <FontAwesomeIcon onClick={()=>{
                                          setEditWidget(true);
                                        }} icon={faEllipsisH} /></div>
                                        <div> 
                                          <ThreadOptions toggleThreadOptions={showEditWidget} thread_id={state.curr_thread_id}/>
                                        </div>
                                      </div> : 
                                      <div>
                                        This is not your post
                                      </div> }
                                     
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>

                      {/*-----COMMENT SECTION BELOW ---------*/ }
                      <div className="container comment-button-container">
                        <div className="row">
                          <div className="col">
                         
                          </div>
                          <div className="col-9 flex-center flex-column">
                            <div><button className='comment-button'>comment</button></div>
                           
                            <div className="container">
                              <div className="row">
                                <div><Filter_Content_Component /></div>
                                <Comment_Item_Component threadComments={{thread_comments}}/>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="col-1">
                  
                  </div>
                </div>
              </div>
          </div>
          
       
      </React.Fragment>
  );
    

}

export default Thread_Post_Component;