import React from 'react';
import { useState } from 'react'

import Backdrop from './Backdrop';
import Modal from './Modal';


function Todo(props) {
    //react hooks
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true)
    }
    function closeModalHandler() {
        setModalIsOpen(false)
    }

    return (
        <div id="todo">
            <div className='card'>
                <h2>
                    {props.text}
                </h2>
                <div className='action'>
                    <button className='btn' onClick={deleteHandler}>Delete
                    </button>
                </div>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}

        </div>
    );
}

export default Todo;