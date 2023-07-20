const updateLocalStorage = require('./updateLocalStorage');

const deleteTask = (tasks, indexToDelete) => {
  tasks.splice(indexToDelete, 1);
  updateLocalStorage(tasks);
};

module.exports = deleteTask;
