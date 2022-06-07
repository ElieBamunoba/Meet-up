import React from 'react';

function Todo(props) {

    function deleteHandler() {
        console.log('delete clicked');
        console.log(props.text);
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
        </div>
    );
}

export default Todo;