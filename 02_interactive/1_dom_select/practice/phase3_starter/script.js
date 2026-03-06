// =============================================
// Phase 3: 이벤트 객체 활용
// =============================================

const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const remainingCount = document.getElementById("remaining-count");

// 남은 항목 수 업데이트
function updateCount() {
  // 완료되지 않은 항목만 개수 세기
  remainingCount.textContent =
    todoList.querySelectorAll(".todo-item:not(.done)").length;
}

// 할 일 추가 함수
function addTodo() {
  const text = todoInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.className = "todo-item";

  // 미션 ②: 체크박스 만들고 클릭 이벤트 추가하기
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function (e) {
    // e.target.checked 가 true이면 done 클래스 추가
    // false이면 done 클래스 제거
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
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  todoInput.value = "";
  updateCount();
}

// 추가 버튼 클릭
addBtn.addEventListener("click", addTodo);

// 미션 ①: Enter 키 이벤트 추가하기
todoInput.addEventListener("keydown", function (e) {
  // e.key 값을 콘솔로 확인해보세요
  console.log("눌린 키:", e.key);

  // Enter 키일 때 addTodo() 호출하기
  if (e.key === "Enter") {
    addTodo();
  }
});

// 처음 화면에 있는 샘플 항목도 반영
updateCount();