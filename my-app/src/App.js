import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';

function App() {

  const [taskName, setTaskName] = useState();

  const [tasks, setTasks] = useState([]);

  const updateTaskName = (value) => {
    setTaskName(value)
  }

  const createTask = () => {
    if(!taskName){
      return
    }
    setTasks([...tasks, taskName])
    clearTask()
  }

  const clearTask = () => {  
    setTaskName("")
  }
  



  return (
    <div>
      <label>Enter task name </label>
      
      <input type="text" value={taskName} onChange={(e) => {
        updateTaskName(e.target.value)
      }}></input>

      <button type="submit" onClick={createTask}>Create Task</button>
      <button type="clear" onClick={clearTask}>clear Task</button>

      <div>
        <h3>List of Tasks {tasks.length}</h3>

        {
          tasks.map((t, index) => {
            return <div key={index}>{t}</div>
          })
        }
  
      </div>
    </div>
  );
}

export default App;
