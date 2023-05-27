import React from "react";
import { FaCheckDouble, FaEdit, FaRegTrashAlt } from "react-icons/fa";

const Task = () => {
  return (
    <div className="task">
      <p>
        <b>1.</b>Task 1
      </p>
      <div className="task-icons">
        <FaCheckDouble color="green" onClick={() => setToComplete(task)} />
        <FaEdit color="purple" onClick={() => getSingleTask(task)} />
        <FaRegTrashAlt color="red" onClick={() => deleteTask(task._id)} />
      </div>
    </div>
  );
};

export default Task;
