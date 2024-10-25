const taskInput = document.querySelector(".taskInput");
const tasksContainer = document.querySelector(".not_completed");

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
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
  saveData();
});

function taskHtml(task) {
  return `${task} <img src="./images/cross.svg" alt="cross" />`;
}

function saveData() {
  localStorage.setItem("data", tasksContainer.innerHTML);
}

function fetchData() {
  tasksContainer.innerHTML = localStorage.getItem("data");
}

// fetchData();
