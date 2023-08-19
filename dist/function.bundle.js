"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["function"],{

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



/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateTodoList)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/app.js");


const removeTask = (tasks, taskId) => {
  if (taskId >= 0 && taskId < tasks.length) {
    tasks.splice(taskId, 1);
    (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);
  }
};

const clearCompletedTasks = (tasks) => {
  const remainingTasks = tasks.filter((task) => !task.completed);
  tasks.length = 0;
  remainingTasks.forEach((task) => tasks.push(task));
  (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);
};

function populateTodoList() {
  const tasksString = localStorage.getItem('tasks');
  const tasks = tasksString ? JSON.parse(tasksString) : [];
  const todoList = document.getElementById('todo');
  todoList.innerHTML = '';
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'task-item';
    listItem.innerHTML = `
      <div class='taskContainer'>
        <input type='checkbox' class='checkbox' ${task.completed ? 'checked' : ''}>
        <input type='text' class='Text' value='${task.description}' ${task.completed ? 'disabled' : ''}>
        <button class='removeBtn' type='button' data-id='${index}'>&#x1F5D1;</button>
      </div>     
    `;

    const checkbox = listItem.querySelector('.checkbox');
    checkbox.addEventListener('change', () => {
      tasks[index].completed = checkbox.checked;
      (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);
    });

    todoList.appendChild(listItem);
  });

  const addBtn = document.getElementById('addBtn');
  const newTaskInput = document.getElementById('new-task-input');
  const clearButton = document.getElementById('clear');

  addBtn.addEventListener('click', () => {
    const description = newTaskInput.value;
    if (description.trim() !== '') {
      (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.addTask)(tasks, description);
      (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);
      populateTodoList();
      newTaskInput.value = '';
    }
  });

  clearButton.addEventListener('click', () => {
    clearCompletedTasks(tasks);
    (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);
    populateTodoList();
  });

  const removeButtons = document.getElementsByClassName('removeBtn');
  Array.from(removeButtons).forEach((button) => {
    button.addEventListener('click', (event) => {
      const taskId = event.target.getAttribute('data-id');
      removeTask(tasks, taskId);
      (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);
      populateTodoList();
    });
  });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/function.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0JBQWtCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNRTs7Ozs7Ozs7Ozs7Ozs7OztBQzNDcUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQWtCO0FBQ3BCO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnQ0FBZ0M7QUFDbEYsaURBQWlELGlCQUFpQixJQUFJLGlDQUFpQztBQUN2RywyREFBMkQsTUFBTSxXQUFXO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQWtCO0FBQ3hCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdEQUFPO0FBQ2IsTUFBTSwyREFBa0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQWtCO0FBQ3RCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQWtCO0FBQ3hCO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZnVuY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGxvY2FsU3RvcmFnZSA9IFtdO1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcclxuICBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG59XHJcblxyXG5jb25zdCB1cGRhdGVMb2NhbFN0b3JhZ2UgPSAodGFza3MpID0+IHtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgdGFzay5pbmRleCA9IGluZGV4ICsgMTtcclxuICB9KTtcclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZFRhc2sgPSAodGFza3MsIGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgY29uc3QgbmV3VGFzayA9IHtcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIGluZGV4OiB0YXNrcy5sZW5ndGggKyAxLFxyXG4gIH07XHJcbiAgdGFza3MucHVzaChuZXdUYXNrKTtcclxuICB1cGRhdGVMb2NhbFN0b3JhZ2UodGFza3MpO1xyXG59O1xyXG5jb25zdCBkZWxldGVUYXNrID0gKHRhc2tzLCB0YXNrSWQpID0+IHtcclxuICBpZiAodGFza0lkID49IDAgJiYgdGFza0lkIDwgdGFza3MubGVuZ3RoKSB7XHJcbiAgICB0YXNrcy5zcGxpY2UodGFza0lkLCAxKTtcclxuICAgIGZvciAobGV0IGkgPSB0YXNrSWQ7IGkgPCB0YXNrcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICB0YXNrc1tpXS5pbmRleCA9IGkgKyAxO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRhc2tzKTtcclxuICB9XHJcbn07XHJcbmNvbnN0IGVkaXRUYXNrRGVzY3JpcHRpb24gPSAodGFza3MsIHRhc2tJZCwgbmV3RGVzY3JpcHRpb24pID0+IHtcclxuICBpZiAodGFza0lkID49IDAgJiYgdGFza0lkIDwgdGFza3MubGVuZ3RoKSB7XHJcbiAgICB0YXNrc1t0YXNrSWRdLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodGFza3MpO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IHtcclxuICBhZGRUYXNrLFxyXG4gIGRlbGV0ZVRhc2ssXHJcbiAgZWRpdFRhc2tEZXNjcmlwdGlvbixcclxuICB1cGRhdGVMb2NhbFN0b3JhZ2UsXHJcbn07XHJcbiIsImltcG9ydCB7IGFkZFRhc2ssIHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vYXBwLmpzJztcclxuXHJcbmNvbnN0IHJlbW92ZVRhc2sgPSAodGFza3MsIHRhc2tJZCkgPT4ge1xyXG4gIGlmICh0YXNrSWQgPj0gMCAmJiB0YXNrSWQgPCB0YXNrcy5sZW5ndGgpIHtcclxuICAgIHRhc2tzLnNwbGljZSh0YXNrSWQsIDEpO1xyXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRhc2tzKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjbGVhckNvbXBsZXRlZFRhc2tzID0gKHRhc2tzKSA9PiB7XHJcbiAgY29uc3QgcmVtYWluaW5nVGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlZCk7XHJcbiAgdGFza3MubGVuZ3RoID0gMDtcclxuICByZW1haW5pbmdUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB0YXNrcy5wdXNoKHRhc2spKTtcclxuICB1cGRhdGVMb2NhbFN0b3JhZ2UodGFza3MpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVUb2RvTGlzdCgpIHtcclxuICBjb25zdCB0YXNrc1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpO1xyXG4gIGNvbnN0IHRhc2tzID0gdGFza3NTdHJpbmcgPyBKU09OLnBhcnNlKHRhc2tzU3RyaW5nKSA6IFtdO1xyXG4gIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8nKTtcclxuICB0b2RvTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gJ3Rhc2staXRlbSc7XHJcbiAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9J3Rhc2tDb250YWluZXInPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2xhc3M9J2NoZWNrYm94JyAke3Rhc2suY29tcGxldGVkID8gJ2NoZWNrZWQnIDogJyd9PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0nVGV4dCcgdmFsdWU9JyR7dGFzay5kZXNjcmlwdGlvbn0nICR7dGFzay5jb21wbGV0ZWQgPyAnZGlzYWJsZWQnIDogJyd9PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9J3JlbW92ZUJ0bicgdHlwZT0nYnV0dG9uJyBkYXRhLWlkPScke2luZGV4fSc+JiN4MUY1RDE7PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PiAgICAgXHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrYm94ID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrYm94Jyk7XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIHRhc2tzW2luZGV4XS5jb21wbGV0ZWQgPSBjaGVja2JveC5jaGVja2VkO1xyXG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodGFza3MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkQnRuJyk7XHJcbiAgY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrLWlucHV0Jyk7XHJcbiAgY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXInKTtcclxuXHJcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBuZXdUYXNrSW5wdXQudmFsdWU7XHJcbiAgICBpZiAoZGVzY3JpcHRpb24udHJpbSgpICE9PSAnJykge1xyXG4gICAgICBhZGRUYXNrKHRhc2tzLCBkZXNjcmlwdGlvbik7XHJcbiAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSh0YXNrcyk7XHJcbiAgICAgIHBvcHVsYXRlVG9kb0xpc3QoKTtcclxuICAgICAgbmV3VGFza0lucHV0LnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY2xlYXJDb21wbGV0ZWRUYXNrcyh0YXNrcyk7XHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodGFza3MpO1xyXG4gICAgcG9wdWxhdGVUb2RvTGlzdCgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCByZW1vdmVCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVtb3ZlQnRuJyk7XHJcbiAgQXJyYXkuZnJvbShyZW1vdmVCdXR0b25zKS5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgIHJlbW92ZVRhc2sodGFza3MsIHRhc2tJZCk7XHJcbiAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSh0YXNrcyk7XHJcbiAgICAgIHBvcHVsYXRlVG9kb0xpc3QoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==