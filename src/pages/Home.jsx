import React from "react";
import ToDoList from "../components/ToDoList.jsx";
import CompletedTasks from "../components/CompletedTask.jsx";

function Home({ tasks, addTask, deleteTask, markAsCompleted, completedTasks }) {
  return (
    <div className="home-container mt-4">
      <div className="row">
          <ToDoList tasks={tasks} addTask={addTask} deleteTask={deleteTask} markAsCompleted={markAsCompleted} />

        </div>
        <div className="row">
          <CompletedTasks tasks={completedTasks} />
      </div>
    </div>
  );
}

export default Home;
