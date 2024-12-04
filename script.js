function checkAnswer(button) {
    const questionSection = button.parentElement;

    const userAnswer = questionSection.querySelector('input').value.trim().toLowerCase().replace(/\s+/g, '');
    const correctAnswer = questionSection.dataset.answer.trim().toLowerCase().replace(/\s+/g, '');

    const result = questionSection.querySelector('.result');

    if (userAnswer === correctAnswer) {
        result.textContent = "Correct!";
        result.style.color = "green";
    } else {
        result.textContent = "Incorrect. Try again.";
        result.style.color = "red";
    }
}
