import React from "react";

function CompletedTasks({ tasks }) {
  return (
    <div>
      <h3>Completed Tasks</h3>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item">
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompletedTasks;
