const users = [
  { name: "Alice", age: 28, isPremium: true, score: 85 },
  { name: "Bob", age: 17, isPremium: false, score: 62 },
  { name: "Carol", age: 34, isPremium: true, score: 91 },
  { name: "Dave", age: 22, isPremium: false, score: 47 },
  { name: "Eve", age: 10, isPremium: true, score: 73 },
];

// 프리미엄 회원 모두가 점수 70점 이상인지 확인하세요.
const result = users.filter((u) => u.isPremium).every((u) => u.score >= 70);
console.log(result);

// isPremium이 false일 때는 점수 판단의 의미가 X
// isPremium이 true일 떄는 점수를 판단!!
// every
users.every(function (user) {
  if (!user.isPremium) {
    return true;
  }

  // 그 다음로직
  if (user.score >= 70) {
    return true;
  } else {
    return false;
  }
});
