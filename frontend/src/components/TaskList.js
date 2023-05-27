import { useState } from "react";
import axios from "axios";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { toast } from "react-toastify";
import { URL } from "../App";
import loadingImg from "../assets/loader.gif";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [taskID, setTaskID] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });
  const { name } = formData;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const getTasks = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${URL}/api/tasks`);
      console.log(data);
      setTasks(data);
      setIsLoading(false);
    } catch (error) {
      toast(error.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);

  const createTask = async (e) => {
    e.preventDefault();
    //console.log(formData);
    if (name === "") {
      return toast.error("Input field cannot be empty!");
    }
    try {
      await axios.post(`${URL}/api/tasks`, formData);
      setFormData({ ...formData, name: "" });

      getTasks();
    } catch (error) {
      toast(error.message);
    }
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
      />
      <div className="--flex-between --pb">
        <p>
          <b>Total Tasks:</b> 0
        </p>
        <p>
          <b>Completed Tasks:</b> 0
        </p>
      </div>
      <hr />
      {isLoading && (
        <div className="--flex-center">
          <img src={loadingImg} alt="Loading" />
        </div>
      )}
      {!isLoading && tasks.length === 0 ? (
        <p className="--py">No task added. Please add a task.</p>
      ) : (
        <>
          {tasks.map((task, index) => {
            return (
              <Task
                key={task._id}
                task={task}
                index={index}
                deleteTask={deleteTask}
                getSingleTask={getSingleTask}
                updateTask={updateTask}
                setToComplete={setToComplete}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default TaskList;
