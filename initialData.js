const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

let currentTaskId = null;

// Updates the board with the tasks
function updateTasks() {
  const columns = {
    todo: document.querySelector('#todo-column .tasks'),
    doing: document.querySelector('#doing-column .tasks'),
    done: document.querySelector('#done-column .tasks'),
  };

  // Clear all columns
  Object.values(columns).forEach(col => col.innerHTML = '');

  // Add each task to the correct column
  initialTasks.forEach(task => {
    const taskCreate = document.createElement('span');
    taskCreate.classList.add('task');
    taskCreate.textContent = task.title;
    taskCreate.title = task.description;

    // When clicked, open a modal for this task
    taskCreate.addEventListener('click', () => openModal(task.id));
    columns[task.status].appendChild(taskCreate);
  });
}
// Open modal function
function openModal(taskId) {
  currentTaskId = taskId;
  const task = initialTasks.find(k => k.id === taskId);

  document.getElementById("taskTitle").value = task.title;
  document.getElementById("taskDescription").value = task.description;
  document.getElementById("taskStatus").value = task.status;

  document.getElementById("taskModal").classList.remove("hidden");
}

// Close modal function
function closeModal() {
  document.getElementById("taskModal").classList.add("hidden");
  currentTaskId = null;
}

// Save changes function
function saveTask() {
  const title = document.getElementById("taskTitle").value.trim();
  const description = document.getElementById("taskDescription").value.trim();
  const status = document.getElementById("taskStatus").value;



  const task = initialTasks.find(k => k.id === currentTaskId);
  if (task) {
    task.title = title;
    task.description = description;
    task.status = status;
  }

  updateTasks();
  closeModal();
}
