const taskInput = document.querySelector(".taskInput");
const tasksContainer = document.querySelector(".not_completed");
const completedTasks = document.querySelector(".completed");
const clearBtn = document.querySelector(".cleat_btn");

function addTask() {
  if (!taskInput.value) {
    alert("please write something");
    return;
  }
  let li = document.createElement("li");
  li.innerHTML = taskHtml(taskInput.value);
  tasksContainer.append(li);
  taskInput.value = "";
  saveData();
}

tasksContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    completedTasks.appendChild(e.target);
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
  saveData();
});

completedTasks.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    tasksContainer.appendChild(e.target);
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
  saveData();
});

function deleteCompletedTasks() {
  completedTasks.innerHTML = "";
  saveData();
}

function taskHtml(task) {
  return `${task} <img src="./images/cross.svg" alt="cross" />`;
}

function saveData() {
  localStorage.setItem("tasks", tasksContainer.innerHTML);
  localStorage.setItem("completed_tasks", completedTasks.innerHTML);
}

function fetchData() {
  tasksContainer.innerHTML = localStorage.getItem("tasks");
  completedTasks.innerHTML = localStorage.getItem("completed_tasks");
}

fetchData();
