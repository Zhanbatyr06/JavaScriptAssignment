document.getElementById('submit-quiz').addEventListener('click', () => {
    const answers = {
        q1: 'Mozzarella',
        q2: 'Italy',
        q3: '00 flour',
        q4: 'Round',
        q5: 'Pepperoni',
        q6: '300°C',
        q7: 'Hawaiian'
    };

    let score = 0;

    // Calculate the score
    Object.keys(answers).forEach((question) => {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    });

    // Show the result
    const resultSection = document.getElementById('quiz-result');
    resultSection.style.display = 'block';

    const scoreElement = document.getElementById('score');
    scoreElement.textContent = score;

    const feedbackElement = document.getElementById('feedback');
    if (score === 7) {
        feedbackElement.textContent = 'Amazing! You are a pizza expert!';
    } else if (score >= 4) {
        feedbackElement.textContent = 'Good job! You know quite a lot about pizza.';
    } else {
        feedbackElement.textContent = 'Keep learning about pizza, and try again!';
    }
});
