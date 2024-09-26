document.getElementById('submit').addEventListener('click', function() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (!selectedAnswer) {
      alert('답변을 선택해주세요!');
      return;
  }

  if (selectedAnswer.value === 'A') {
      window.location.href = 'correct.html';  // 정답 페이지로 이동
  } else {
      window.location.href = 'incorrect.html';  // 오답 페이지로 이동
  }
});
