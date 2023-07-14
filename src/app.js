let localStorage = [];

if (typeof window !== 'undefined' && window.localStorage) {
  localStorage = window.localStorage;
}

const updateLocalStorage = (tasks) => {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const addTask = (tasks, description) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  updateLocalStorage(tasks);
};
const deleteTask = (tasks, taskId) => {
  if (taskId >= 0 && taskId < tasks.length) {
    tasks.splice(taskId, 1);
    for (let i = taskId; i < tasks.length; i += 1) {
      tasks[i].index = i + 1;
    }
    updateLocalStorage(tasks);
  }
};
const editTaskDescription = (tasks, taskId, newDescription) => {
  if (taskId >= 0 && taskId < tasks.length) {
    tasks[taskId].description = newDescription;
    updateLocalStorage(tasks);
  }
};
export {
  addTask,
  deleteTask,
  editTaskDescription,
  updateLocalStorage,
};
