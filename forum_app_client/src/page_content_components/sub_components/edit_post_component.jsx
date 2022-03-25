import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

//Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons'


//scss imports
import '../../App.scss';

function Edit_Post_Component(props){

    console.log(props.showModal);

    function closeModal(){

        console.log('closing modal');

    }

    return (
      <div className="">
        <Modal show={props.showModal}>
            Blerp
            <Button variant="primary" onClick={closeModal}>
                Save Changes
            </Button>
        </Modal>
      </div>
    );

}

export default Edit_Post_Component;