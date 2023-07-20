const updateLocalStorage = require('./updateLocalStorage.js');
const deleteTask = require('./deleteTask.js');

jest.mock('./updateLocalStorage');

describe('deleteTask', () => {
  it('should delete a task from the tasks array', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: true, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];

    const indexToDelete = 1; // Deleting the second task (index 1)

    deleteTask(tasks, indexToDelete);

    // Check if the task was deleted from the tasks array
    expect(tasks.length).toBe(2);

    // Check if the correct task was deleted
    expect(tasks[0].description).toBe('Task 1');
    expect(tasks[1].description).toBe('Task 3');

    // Check if the updateLocalStorage function was called with the updated tasks array
    expect(updateLocalStorage).toHaveBeenCalledWith(tasks);
  });
});
