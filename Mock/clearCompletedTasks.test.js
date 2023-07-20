const clearCompletedTasks = require('./clearCompletedTasks.js');
const updateLocalStorage = require('./updateLocalStorage.js');

// Mock the updateLocalStorage function
jest.mock('./updateLocalStorage', () => jest.fn());

// Mock the localStorage object
const localStorageMock = (() => {
  let store = {};

  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();
global.localStorage = localStorageMock;

describe('clearCompletedTasks', () => {
  beforeEach(() => {
    localStorageMock.setItem.mockClear();
  });

  test('should remove completed tasks from the list and update localStorage', () => {
    // Arrange: Prepare a sample array of tasks with completed and remaining tasks
    const tasks = [
      { description: 'Task 1', index: 1, completed: true },
      { description: 'Task 2', index: 2, completed: false },
      { description: 'Task 3', index: 3, completed: true },
      { description: 'Task 4', index: 4, completed: false },
    ];

    // Act: Call the function under test
    clearCompletedTasks(tasks);

    // Assert: Check if completed tasks are removed, remaining tasks are intact,
    // and updateLocalStorage is called with the updated task list
    const expectedRemainingTasks = [
      { description: 'Task 2', index: 2, completed: false },
      { description: 'Task 4', index: 4, completed: false },
    ];

    expect(tasks).toEqual(expectedRemainingTasks);
    expect(updateLocalStorage).toHaveBeenCalledTimes(1);
    expect(updateLocalStorage).toHaveBeenCalledWith(expectedRemainingTasks);
  });

  test('should handle empty task list and call updateLocalStorage', () => {
    // Arrange: Prepare an empty array of tasks
    const tasks = [];

    // Act: Call the function under test
    clearCompletedTasks(tasks);
    // Assert:
    expect(tasks).toEqual([]);
    expect(updateLocalStorage).toHaveBeenCalledTimes(2);
    expect(updateLocalStorage).toHaveBeenCalledWith([]);
  });
});
