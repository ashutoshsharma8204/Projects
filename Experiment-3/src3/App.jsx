import React, { useState } from "react";
import "./App.css";
function Task() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]); 
  function saveTask(e) {
    setTask(e.target.value);
  }
  function Addtask() {
    setTaskList([...taskList, task]);
  }
  function handleDelete(index) {
    taskList.splice(index, 1);
    setTaskList([...taskList]);
  }
  return (
    <div>
      <h1>Add Task</h1>
      <input type="text" placeholder="Add Task" onChange={saveTask} />
      <button onClick={Addtask}>Add</button>
      <button onClick={() => setTaskList([])}>Clear</button>
       <p>List</p>
       <ul>{taskList.map(function(val, index) {
          return (
          <li>
            {val} <button onClick={() =>handleDelete(index)}>Delete</button></li>);
        })}</ul>
      </div>
  );
}
  export default Task;