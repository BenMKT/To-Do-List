const updateLocalStorage = require('./updateLocalStorage.js');

const clearCompletedTasks = (tasks) => {
  const remainingTasks = tasks.filter((task) => !task.completed);
  tasks.length = 0;
  remainingTasks.forEach((task) => tasks.push(task));
  updateLocalStorage(tasks);
};

module.exports = clearCompletedTasks;
