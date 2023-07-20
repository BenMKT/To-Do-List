const updateLocalStorage = require('./updateLocalStorage.js');

const deleteTask = (tasks, indexToDelete) => {
  tasks.splice(indexToDelete, 1);
  updateLocalStorage(tasks);
};

module.exports = deleteTask;
