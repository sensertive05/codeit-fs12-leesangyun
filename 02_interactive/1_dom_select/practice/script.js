// =============================================
// Phase 2: 항목 추가 + 삭제
// =============================================

const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const remainingCount = document.getElementById("remaining-count");

// 남은 항목 수 업데이트 함수
function updateCount() {
  // todoList 안의 li 개수를 remainingCount에 넣기
  remainingCount.textContent = todoList.children.length;
}

// 할 일 추가 함수
function addTodo() {
  const text = todoInput.value.trim();

  // 빈 값이면 아무것도 하지 않기
  if (text === "") return;

  // ① li 요소 만들기
  const li = document.createElement("li");
  li.className = "todo-item";

  // ② span 요소 만들기 + 텍스트 넣기
  const span = document.createElement("span");
  span.textContent = text;

  // ③ 삭제 버튼 만들기
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.className = "btn-delete";

  // ④ 삭제 버튼 클릭 시 li 삭제 + 카운트 업데이트
  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateCount();
  });

  // ⑤ li에 span, deleteBtn 붙이기
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // ⑥ todoList에 li 추가하기
  todoList.appendChild(li);

  // ⑦ 입력창 비우기
  todoInput.value = "";

  // ⑧ 카운트 업데이트
  updateCount();
}

// 추가 버튼 클릭 이벤트
addBtn.addEventListener("click", addTodo);

// 처음 실행될 때도 카운트 맞추기
updateCount();
