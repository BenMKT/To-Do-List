const updateLocalStorage = (tasks) => {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
};

module.exports = updateLocalStorage;
