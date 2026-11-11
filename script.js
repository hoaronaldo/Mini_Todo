console.log("Hello, VO THI THANH THAO!");
//dat ten bien task-input,btn-add,task-list,summary
const taskInput = document.getElementById("task-input");
const btnAdd = document.getElementById("btn-add");
const taskList = document.getElementById("task-list");
const summary = document.getElementById("summary");
const filterButtons = document.querySelectorAll(".filters button");

btnAdd.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    taskInput.classList.add("error");
  }

  const task = document.createElement("div");
  task.className = "task";
  task.innerHTML = `
    <input class="checkbox" aria-hidden="true" type="checkbox" onchange="toggleTask(this)" />
    <span class="task-title">${taskText}</span>
    <button class="delete" type="button" onclick="deleteTask(this)">Xóa</button>`;

  taskList.append(task);
  taskInput.value = "";
  taskInput.classList.remove("error");
  taskList.append(task);
updateCount();
});

function toggleTask(checkbox) {
  // bật hoặc tắt class completed để gạch ngang chữ
  checkbox.parentElement.classList.toggle("completed");
    updateCount();
}
function deleteTask(button) {
  // xóa thẻ task cha chứa nút bấm
  button.parentElement.remove();
  updateCount();
}

filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    filterButtons.forEach(function (button) {
      btn.classList.toggle("active");
    });
    btn.classList.add("active");
    const filterType = btn.textContent.trim();
    const tasks = taskList.querySelectorAll(".task");
    tasks.forEach(function (task) {
      const isCompleted = task.classList.contains("completed");
      if (filterType === "Tất cả") {
        task.style.display = "flex";
      } else if (filterType === "Chưa xong") {
        task.style.display = isCompleted ? "none" : "flex";
      } else if (filterType === "Đã xong") {
        task.style.display = isCompleted ? "flex" : "none";
      }
    });
  });
});

function updateCount() {
  const uncompletedTasks = taskList.querySelectorAll(".task:not(.completed)");
  const count = uncompletedTasks.length;

  summary.textContent = `Còn ${count} việc chưa xong`;
}


function toggleTask(checkbox) {
  checkbox.parentElement.classList.toggle("completed");
  updateCount();
}

function deleteTask(button) {
  button.parentElement.remove();
  updateCount();
}


