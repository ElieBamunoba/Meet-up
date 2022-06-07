import React from 'react';

function Todo(props) {


    return (
        <div id="todo">
            <div className='card'>
                <h2>
                    {props.text}
                </h2>
                <div className='action'>
                    <button className='btn'>Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Todo;