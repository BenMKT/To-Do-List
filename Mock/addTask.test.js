const addTask = require('./addTask');
const updateLocalStorage = require('./updateLocalStorage');

jest.mock('./updateLocalStorage');

describe('addTask', () => {
  it('should add a new task to the tasks array', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: true, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];
    const description = 'New Task';
    addTask(tasks, description);
    // Check if the task was added to the tasks array
    expect(tasks.length).toBe(4);
    // Check if the new task has the correct description and index
    expect(tasks[3]).toEqual({
      description: 'New Task',
      completed: false,
      index: 4,
    });
    // Check if the updateLocalStorage function was called with the updated tasks array
    expect(updateLocalStorage).toHaveBeenCalledWith(tasks);
  });
});
