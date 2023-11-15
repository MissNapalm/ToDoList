// Function to add a new task to the list
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskValue = taskInput.value;

    if (taskValue.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var listItem = createTaskElement(taskValue);
    var taskList = document.getElementById("taskList");
    taskList.appendChild(listItem);

    taskInput.value = "";
}

// Function to create a new task element
function createTaskElement(taskValue) {
    var listItem = document.createElement("li");
    listItem.textContent = taskValue;

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
        editTask(listItem);
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        deleteTask(listItem);
    };

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

// Function to edit a task
function editTask(listItem) {
    var newTaskValue = prompt("Edit task:", listItem.textContent.trim());

    if (newTaskValue !== null) {
        listItem.textContent = newTaskValue;
    }
}

// Function to delete a task
function deleteTask(listItem) {
    listItem.remove();
}