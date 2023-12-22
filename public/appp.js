let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        const task = {
            id: Date.now(),
            text: taskInput.value,
            completed: false,
        };

        tasks.push(task);
        displayTasks();

        // Clear input field
        taskInput.value = "";
    }
}

function toggleTaskCompletion(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");

        // Create a checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTaskCompletion(task.id));

        // Apply the completed class if the task is completed
        if (task.completed) {
            li.classList.add("completed");
        }

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(task.text));
        taskList.appendChild(li);
    });
}
