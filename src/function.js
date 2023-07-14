import { addTask, updateLocalStorage } from './app.js';

const removeTask = (tasks, taskId) => {
  if (taskId >= 0 && taskId < tasks.length) {
    tasks.splice(taskId, 1);
    updateLocalStorage(tasks);
  }
};

const clearCompletedTasks = (tasks) => {
  const remainingTasks = tasks.filter((task) => !task.completed);
  tasks.length = 0;
  remainingTasks.forEach((task) => tasks.push(task));
  updateLocalStorage(tasks);
};

export default function populateTodoList() {
  const tasksString = localStorage.getItem('tasks');
  const tasks = tasksString ? JSON.parse(tasksString) : [];
  const todoList = document.getElementById('todo');
  todoList.innerHTML = '';
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'task-item';
    listItem.innerHTML = `
      <div class='taskContainer'>
        <input type='checkbox' class='checkbox' ${
          task.completed ? 'checked' : ''
        }>
        <input type='text' class='Text' value='${task.description}' ${
      task.completed ? 'disabled' : ''
    }>
        <button class='removeBtn' type='button' data-id='${index}'>&#x1F5D1;</button>
      </div>     
    `;

    const checkbox = listItem.querySelector('.checkbox');
    checkbox.addEventListener('change', () => {
      tasks[index].completed = checkbox.checked;
      updateLocalStorage(tasks);
    });

    todoList.appendChild(listItem);
    
  });

  const addBtn = document.getElementById('addBtn');
  const newTaskInput = document.getElementById('new-task-input');
  const clearButton = document.getElementById('clear');

  addBtn.addEventListener('click', () => {
    const description = newTaskInput.value;
    if (description.trim() !== '') {
      addTask(tasks, description);
      updateLocalStorage(tasks);
      populateTodoList();
      newTaskInput.value = '';
    }
  });

  clearButton.addEventListener('click', () => {
    clearCompletedTasks(tasks);
    updateLocalStorage(tasks);
    populateTodoList();
  });

  const removeButtons = document.getElementsByClassName('removeBtn');
  Array.from(removeButtons).forEach((button) => {
    button.addEventListener('click', (event) => {
      const taskId = event.target.getAttribute('data-id');
      removeTask(tasks, taskId);
      updateLocalStorage(tasks);
      populateTodoList();
    });
  });
}
