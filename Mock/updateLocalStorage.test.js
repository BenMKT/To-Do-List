const updateLocalStorage = require("./updateLocalStorage.js");

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

describe("updateLocalStorage", () => {
  test("should update and store tasks in localStorage", () => {
    // Arrange: Prepare a sample array of tasks
    const tasks = [
      { description: "Task 1", completed: false, index: 1 },
      { description: "Task 2", completed: true, index: 2 },
      { description: "Task 3", completed: false, index: 3 },
    ];

    // Act: Call the function under test
    updateLocalStorage(tasks);

    // Assert: Check if localStorage.setItem is called with the correct data
    expect(localStorageMock.setItem).toHaveBeenCalledTimes(1);
    expect(localStorageMock.setItem).toHaveBeenCalledWith("tasks",JSON.stringify(tasks));
  });

  test("should update and store tasks with updated index in localStorage", () => {
    // Arrange: Prepare a sample array of tasks
    const tasks = [
      { description: "Task 1", completed: false, index: 1 },
      { description: "Task 2", completed: true, index: 2 },
      { description: "Task 3", completed: false, index: 3 },
    ];

    // Act: Call the function under test
    updateLocalStorage(tasks);

    // Assert: Check if the index property of each task is updated correctly
    const updatedTasks = JSON.parse(localStorageMock.setItem.mock.calls[0][1]);
    updatedTasks.forEach((task, index) => {
      expect(task.index).toBe(index + 1);
    });
  });
});
