const target = document.getElementById("target");

// beforebegin: 요소 바로 앞
target.insertAdjacentHTML("beforebegin", "<p>앞</p>");

// afterbegin: 첫 번째 자식으로
target.insertAdjacentHTML("afterbegin", "<span>시작</span>");

// beforeend: 마지막 자식으로
target.insertAdjacentHTML("beforeend", "<span>끝</span>");

// afterend: 요소 바로 뒤
target.insertAdjacentHTML("afterend", "<p>뒤</p>");
