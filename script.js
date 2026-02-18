//  * TO-DO LIST LOGIC
//  * Features: Add, Delete, Toggle Check, LocalStorage, Clear All

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
  if (inputBox.value === "") {
    alert("Please write a task first!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// Event listener for task interactions (Check/Delete)
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false,
);

// Function to clear all tasks
function clearAllTasks() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    listContainer.innerHTML = "";
    saveData();
  }
}

// Save data to browser's LocalStorage
function saveData() {
  localStorage.setItem("todoData", listContainer.innerHTML);
}

// Load tasks from storage on startup
function showTask() {
  listContainer.innerHTML = localStorage.getItem("todoData");
}

showTask();
