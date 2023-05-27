const Task = require("../models/taskModel");

//Create a task
const createTask = async (req, res) => {
  //console.log(req.body);
  //res.send("Task created");
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Get/Read Tasks
const getTasks = async (req, res) => {
  //console.log(req.body);
  //res.send("Task created");
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getTask = async (req, res) => {
  // console.log(req.params);
  // res.send("get single task");
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`No task with id ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
};
