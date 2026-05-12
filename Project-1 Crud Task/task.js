const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];
let editIndex = null;

// Display Tasks
function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>

            <button onclick="editTask(${index})">
                Edit
            </button>

            <button onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        taskList.appendChild(li);
    });
}

// Add + Update Task
addBtn.addEventListener("click", function () {

    let taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter task");
        return;
    }

    // CREATE
    if (editIndex === null) {
        tasks.push(taskValue);
    }

    // UPDATE
    else {
        tasks[editIndex] = taskValue;
        editIndex = null;
        addBtn.innerText = "Add";
    }

    taskInput.value = "";

    displayTasks();
});

// Edit Task
function editTask(index) {

    taskInput.value = tasks[index];

    editIndex = index;

    addBtn.innerText = "Update";
}

// Delete Task
function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}