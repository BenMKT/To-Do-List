"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editTaskDescription: () => (/* binding */ editTaskDescription),
/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage)
/* harmony export */ });
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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtCQUFrQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbG9jYWxTdG9yYWdlID0gW107XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmxvY2FsU3RvcmFnZSkge1xyXG4gIGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9ICh0YXNrcykgPT4ge1xyXG4gIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICB0YXNrLmluZGV4ID0gaW5kZXggKyAxO1xyXG4gIH0pO1xyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG59O1xyXG5cclxuY29uc3QgYWRkVGFzayA9ICh0YXNrcywgZGVzY3JpcHRpb24pID0+IHtcclxuICBjb25zdCBuZXdUYXNrID0ge1xyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgaW5kZXg6IHRhc2tzLmxlbmd0aCArIDEsXHJcbiAgfTtcclxuICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSh0YXNrcyk7XHJcbn07XHJcbmNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza3MsIHRhc2tJZCkgPT4ge1xyXG4gIGlmICh0YXNrSWQgPj0gMCAmJiB0YXNrSWQgPCB0YXNrcy5sZW5ndGgpIHtcclxuICAgIHRhc2tzLnNwbGljZSh0YXNrSWQsIDEpO1xyXG4gICAgZm9yIChsZXQgaSA9IHRhc2tJZDsgaSA8IHRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHRhc2tzW2ldLmluZGV4ID0gaSArIDE7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodGFza3MpO1xyXG4gIH1cclxufTtcclxuY29uc3QgZWRpdFRhc2tEZXNjcmlwdGlvbiA9ICh0YXNrcywgdGFza0lkLCBuZXdEZXNjcmlwdGlvbikgPT4ge1xyXG4gIGlmICh0YXNrSWQgPj0gMCAmJiB0YXNrSWQgPCB0YXNrcy5sZW5ndGgpIHtcclxuICAgIHRhc2tzW3Rhc2tJZF0uZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSh0YXNrcyk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQge1xyXG4gIGFkZFRhc2ssXHJcbiAgZGVsZXRlVGFzayxcclxuICBlZGl0VGFza0Rlc2NyaXB0aW9uLFxyXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSxcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9