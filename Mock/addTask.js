const updateLocalStorage = require('./updateLocalStorage');

const addTask = (tasks, description) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  updateLocalStorage(tasks);
};

module.exports = addTask;
