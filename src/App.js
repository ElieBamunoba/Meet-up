import React from 'react';
import Todo from './components/Todo';
import Backdrop from './components/Backdrop';
import Modal from './components/Modal';

function App() {
  return (
    <div>
      <h1> My Todos</h1>
      <Todo text='learn React' />
      <Todo text='learn Flutter' />
      <Todo text='learn Django' />
      <Modal />
      <Backdrop />



    </div>
  );

}

export default App;
