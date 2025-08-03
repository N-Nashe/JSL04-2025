export const initialTasks = [
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
    description: "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description: "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description: "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

let currentTaskId = null;

// Render tasks into columns
function updateTasks() {
  const columns = {
    todo: document.getElementById('todo-tasks'),
    doing: document.getElementById('doing-tasks'),
    done: document.getElementById('done-tasks'),
  };

  // Clear columns
  Object.values(columns).forEach(col => col.innerHTML = '');

  // Add tasks to columns
  initialTasks.forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-div';
    taskDiv.textContent = task.title;
    taskDiv.title = task.description;
    taskDiv.addEventListener('click', () => openModal(task.id));
    columns[task.status].appendChild(taskDiv);
  });
}

// Modal logic
function openModal(taskId) {
  currentTaskId = taskId;
  const task = initialTasks.find(t => t.id === taskId);
  document.getElementById('taskTitle').value = task.title;
  document.getElementById('taskDescription').value = task.description;
  document.getElementById('taskStatus').value = task.status;
  document.getElementById('taskModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('taskModal').classList.add('hidden');
  currentTaskId = null;
}

function saveTask() {
  const title = document.getElementById('taskTitle').value.trim();
  const description = document.getElementById('taskDescription').value.trim();
  const status = document.getElementById('taskStatus').value;
  const task = initialTasks.find(t => t.id === currentTaskId);
  if (task) {
    task.title = title;
    task.description = description;
    task.status = status;
  }
  updateTasks();
  closeModal();
}

// Modal event listeners
window.addEventListener('DOMContentLoaded', () => {
  updateTasks();
  document.getElementById('closeModalBtn').onclick = closeModal;
  document.getElementById('saveTaskBtn').onclick = saveTask;
});
