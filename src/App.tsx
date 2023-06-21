import React from 'react';
import './App.css';
import DemoFormComponent from './components/demo-form-component/demo-form-component';
import TodoFormComponent from './components/todo-form-component/todo-form-component';

function App() {
  return (
    <div className="App">
    <h2>Forms</h2>
      <p>Full featured web applications quite often take input from a user using forms and input fields. To extract data from input fields in React, we need to leaern about
        and utilize a few concepts.
      </p>
      <p>In this lab, let's explore how to create functioning forms in React.</p>


      <div className="section-container">
        <DemoFormComponent></DemoFormComponent>

      </div>
      <div className="todo-container">
        <TodoFormComponent></TodoFormComponent>
      </div>

      <div>
        <a href="https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events">https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events</a>
      </div>

      {/*OPTIONAL PRACTICE: If you want more practice later, try creating forms with input field types not explored in this lab; like email, time, checkbox, radio, etc.*/}
    </div>
  );
}

export default App;
