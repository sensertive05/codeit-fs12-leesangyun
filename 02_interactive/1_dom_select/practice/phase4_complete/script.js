// =============================================
// 완성본 - 전체 코드
// =============================================

const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const remainingCount = document.getElementById("remaining-count");
const clearBtn = document.getElementById("clear-btn");

// 남은 항목 수 업데이트 (완료 항목 제외)
function updateCount() {
  const notDone = todoList.querySelectorAll(".todo-item:not(.done)");
  remainingCount.textContent = notDone.length;
}

// 빈 메시지 표시/숨김
function updateEmptyMessage() {
  const items = todoList.querySelectorAll(".todo-item");
  const emptyMsg = todoList.querySelector(".empty-message");

  if (items.length === 0) {
    if (!emptyMsg) {
      const msg = document.createElement("li");
      msg.className = "empty-message";
      msg.textContent = "할 일을 추가해보세요!";
      todoList.appendChild(msg);
    }
  } else {
    if (emptyMsg) emptyMsg.remove();
  }
}

// 할 일 추가
function addTodo() {
  const text = todoInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function (e) {
    if (e.target.checked) {
      li.classList.add("done");
    } else {
      li.classList.remove("done");
    }
    updateCount();
  });

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.className = "btn-delete";
  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateCount();
    updateEmptyMessage();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  todoInput.value = "";
  todoInput.focus();

  updateCount();
  updateEmptyMessage();
}

// 버튼 클릭으로 추가
addBtn.addEventListener("click", addTodo);

// Enter 키로 추가
todoInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});

// 완료 항목 전체 삭제
clearBtn.addEventListener("click", function () {
  const doneItems = todoList.querySelectorAll(".todo-item.done");
  doneItems.forEach((item) => item.remove());
  updateCount();
  updateEmptyMessage();
});
