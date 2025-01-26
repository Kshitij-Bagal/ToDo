import React, { useState } from "react"; 
import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, addTask, deleteTask, markAsCompleted }) {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask.trim());
      setNewTask("");
    }
  };

  const updateTask = (id, newText) => {
    tasks.forEach(task => { if (task.id === id) task.text = newText; });
  };

  return (
    <div>
      <h3>To-Do List</h3>
      <div className="input-group mb-3">
        <input type="text" className="todo-input form-control" placeholder="Add a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button className="btn btn-primary" onClick={handleAddTask}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/></svg>
        </button>
      </div>
      <ul className="list-group">
        {tasks.map(task => (
          <ToDoItem key={task.id} task={task} deleteTask={deleteTask} markAsCompleted={markAsCompleted} updateTask={updateTask} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
