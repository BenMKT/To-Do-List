const updateLocalStorage = require("./updateLocalStorage.js");

const editTaskDescription = (tasks, taskId, newDescription) => {
  if (taskId >= 0 && taskId < tasks.length) {
    tasks[taskId].description = newDescription;
    updateLocalStorage(tasks);
  }
};

module.exports = editTaskDescription;
