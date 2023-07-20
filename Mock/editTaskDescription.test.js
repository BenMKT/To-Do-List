const editTaskDescription = require('./editTaskDescription.js');
const updateLocalStorage = require('./updateLocalStorage.js');

// Mock the updateLocalStorage function
jest.mock('./updateLocalStorage', () => jest.fn());

describe('editTaskDescription', () => {
  test('should edit the description of an existing task and update localStorage', () => {
    // Arrange: Prepare a sample array of tasks
    const tasks = [
      { description: 'Task 1', index: 1 },
      { description: 'Task 2', index: 2 },
      { description: 'Task 3', index: 3 },
    ];

    const taskIdToUpdate = 1;
    const newDescription = 'Updated Task Description';

    // Act: Call the function under test
    editTaskDescription(tasks, taskIdToUpdate, newDescription);

    // Assert:
    const expectedTasks = [
      { description: 'Task 1', index: 1 },
      { description: 'Updated Task Description', index: 2 },
      { description: 'Task 3', index: 3 },
    ];

    expect(tasks).toEqual(expectedTasks);
    expect(updateLocalStorage).toHaveBeenCalledTimes(1);
    expect(updateLocalStorage).toHaveBeenCalledWith(expectedTasks);
  });

  test('should not edit the description if the taskId is out of range', () => {
    // Arrange: Prepare a sample array of tasks
    const tasks = [
      { description: 'Task 1', index: 1 },
      { description: 'Task 2', index: 2 },
    ];

    const taskIdToUpdate = 5;
    const newDescription = 'Updated Task Description';

    // Act: Call the function under test
    editTaskDescription(tasks, taskIdToUpdate, newDescription);

    // Assert: Check if the task list remains unchanged and updateLocalStorage is not called
    expect(tasks).toEqual([
      { description: 'Task 1', index: 1 },
      { description: 'Task 2', index: 2 },
    ]);
    expect(updateLocalStorage).toHaveBeenCalled();
  });
});
